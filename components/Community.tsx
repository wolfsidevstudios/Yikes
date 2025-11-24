import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '../services/supabaseClient';
import { CommunityPost } from '../types';
import { Heart, MessageCircle, Send, PlusSquare, Image as ImageIcon, Loader2, X } from 'lucide-react';

const AVATAR_COLORS = [
  'bg-red-500', 'bg-blue-500', 'bg-green-500', 'bg-yellow-500', 
  'bg-purple-500', 'bg-pink-500', 'bg-indigo-500', 'bg-teal-500'
];

const Community: React.FC = () => {
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCreating, setIsCreating] = useState(false);
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostUsername, setNewPostUsername] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchPosts();
    
    // Subscribe to new posts
    const subscription = supabase
      .channel('public:posts')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'posts' }, (payload) => {
        setPosts((current) => [payload.new as CommunityPost, ...current]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(50);

      if (error) throw error;
      if (data) setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const clearFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if ((!newPostContent.trim() && !selectedFile) || !newPostUsername.trim()) return;

    setIsSubmitting(true);

    try {
      let imageUrl = null;

      if (selectedFile) {
        const fileExt = selectedFile.name.split('.').pop();
        const fileName = `${Math.random().toString(36).substring(2)}_${Date.now()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('community-images')
          .upload(filePath, selectedFile);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage.from('community-images').getPublicUrl(filePath);
        imageUrl = data.publicUrl;
      }

      const randomColor = AVATAR_COLORS[Math.floor(Math.random() * AVATAR_COLORS.length)];

      const { error: insertError } = await supabase
        .from('posts')
        .insert([
          {
            username: newPostUsername,
            content: newPostContent,
            image_url: imageUrl,
            avatar_color: randomColor,
          },
        ]);

      if (insertError) throw insertError;

      // Reset form
      setNewPostContent('');
      setNewPostUsername('');
      clearFile();
      setIsCreating(false);
      
      // Refresh posts immediately (although subscription handles it, this ensures sync)
      fetchPosts();

    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to post. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleLike = async (postId: string, currentLikes: number) => {
    // Optimistic update
    setPosts(posts.map(p => p.id === postId ? { ...p, likes: p.likes + 1 } : p));

    try {
      const { error } = await supabase
        .from('posts')
        .update({ likes: currentLikes + 1 })
        .eq('id', postId);

      if (error) throw error;
    } catch (error) {
      console.error('Error updating likes:', error);
      // Revert if error
      setPosts(posts.map(p => p.id === postId ? { ...p, likes: currentLikes } : p));
    }
  };

  // Helper to format date nicely
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return 'Just now';
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h ago`;
    return `${Math.floor(diffInSeconds / 86400)}d ago`;
  };

  return (
    <section className="w-full py-24 px-4 bg-white border-t border-gray-100 min-h-screen">
      <div className="max-w-[470px] mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 sticky top-24 bg-white/95 backdrop-blur-xl z-20 py-4 border-b border-gray-100">
           <h2 className="text-2xl font-black tracking-tight">Community Feed</h2>
           <button 
             onClick={() => setIsCreating(!isCreating)}
             className="p-2 hover:bg-gray-100 rounded-full transition-colors"
           >
             <PlusSquare className="w-6 h-6 text-black" />
           </button>
        </div>

        {/* Create Post Form */}
        {isCreating && (
          <div className="mb-8 bg-white border border-gray-200 rounded-xl p-4 shadow-xl animate-fade-in-up">
             <form onSubmit={handleSubmit}>
                <div className="flex gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                  <input 
                    type="text" 
                    placeholder="Your Username" 
                    className="w-full font-bold text-sm focus:outline-none placeholder-gray-400"
                    value={newPostUsername}
                    onChange={(e) => setNewPostUsername(e.target.value)}
                    required
                  />
                </div>
                
                <textarea 
                  placeholder="Write a caption..."
                  className="w-full resize-none text-sm mb-4 focus:outline-none min-h-[60px]"
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                />

                {previewUrl && (
                  <div className="relative mb-4 rounded-lg overflow-hidden border border-gray-100">
                    <img src={previewUrl} alt="Preview" className="w-full h-auto max-h-64 object-cover" />
                    <button 
                      type="button" 
                      onClick={clearFile}
                      className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}

                <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                   <button 
                     type="button" 
                     onClick={() => fileInputRef.current?.click()}
                     className="text-blue-500 text-xs font-bold flex items-center gap-1 hover:text-blue-600"
                   >
                     <ImageIcon className="w-4 h-4" />
                     Add Photo
                   </button>
                   <input 
                     type="file" 
                     ref={fileInputRef} 
                     onChange={handleFileSelect} 
                     accept="image/*" 
                     className="hidden" 
                   />

                   <button 
                      type="submit" 
                      disabled={isSubmitting || !newPostUsername.trim()}
                      className="bg-blue-500 text-white px-4 py-1.5 rounded-lg text-sm font-bold hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                   >
                      {isSubmitting && <Loader2 className="w-3 h-3 animate-spin" />}
                      Post
                   </button>
                </div>
             </form>
          </div>
        )}

        {/* Posts Feed */}
        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-gray-300" />
          </div>
        ) : (
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                 
                 {/* Post Header */}
                 <div className="p-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                       <div className={`w-8 h-8 rounded-full ${post.avatar_color || 'bg-gray-900'} flex items-center justify-center text-white text-xs font-bold`}>
                          {post.username.charAt(0).toUpperCase()}
                       </div>
                       <span className="text-sm font-bold text-black">{post.username}</span>
                    </div>
                    <span className="text-xs text-gray-400">{formatDate(post.created_at)}</span>
                 </div>

                 {/* Post Image */}
                 {post.image_url && (
                   <div className="w-full bg-gray-50 border-y border-gray-100">
                      <img src={post.image_url} alt="Post content" className="w-full h-auto object-cover" loading="lazy" />
                   </div>
                 )}

                 {/* Post Actions */}
                 <div className="p-3">
                    <div className="flex items-center gap-4 mb-2">
                       <button 
                         onClick={() => handleLike(post.id, post.likes)}
                         className="group"
                       >
                         <Heart className="w-6 h-6 text-black group-hover:text-red-500 group-hover:fill-red-500 transition-colors" />
                       </button>
                       <MessageCircle className="w-6 h-6 text-black" />
                       <Send className="w-6 h-6 text-black" />
                    </div>
                    
                    <div className="font-bold text-sm mb-1">
                      {post.likes} likes
                    </div>

                    <div className="text-sm">
                       <span className="font-bold mr-2">{post.username}</span>
                       <span className="text-gray-800">{post.content}</span>
                    </div>
                 </div>
              </div>
            ))}
            
            {posts.length === 0 && (
              <div className="text-center py-12 text-gray-400">
                <p>No posts yet. Be the first to share something!</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Community;
