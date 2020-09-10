<?php

namespace App\Http\Controllers;

use App\Post;
use App\Events\PostCreated;
use Illuminate\Http\Request;

class PostController extends Controller
{
    
    public function index()
    {
       return view('posts.create');
    }

    public function createPost(Request $request)
    {
        $post = new Post;
        $post->title = $request->title;
        $post->user_id = $request->user_id;
        $post->save();

        // broadcast(new PostCreated($post));
        // event(new PostCreated($post));

        return response()->json([
            'message' => $post->title
        ]);
    }
}