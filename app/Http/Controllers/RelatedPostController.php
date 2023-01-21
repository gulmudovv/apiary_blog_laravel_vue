<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\PostResource;
use App\Models\Post;

class RelatedPostController extends Controller
{
    public function index(Post $post){
        
        $category = $post->category;
        
        
        $relatedPosts = $category->posts()->where('id', '!=', $post->id)->latest()->take(3)->get();
        
        return  PostResource::collection($relatedPosts);
    }
}
