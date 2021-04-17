<?php

namespace App\Http\Controllers\Api;

use App\Article;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ArticleController extends Controller
{
    static public function getAll()
    {
        $data_array = Article::latest()->get();
        return ArticleController::decodeJsonDataFromArray($data_array);
    }

    static public function getLastArticles($limit)
    {
        $data_array = Article::latest()->limit($limit)->get();
        return ArticleController::decodeJsonDataFromArray($data_array);
    }

    static public function getArticleById($id)
    {
    	$data = Article::where('id', $id)->get()->first();
        return ArticleController::decodeJsonData($data);
    }

    static public function getHotArticle()
    {
        $data = Article::get()->first();
        return ArticleController::decodeJsonData($data);
    }

    static public function browseArticles() {
    	$results = array(
          'hot' => 6,
          'popular' => 12,
          'recent' => 18,
          'viewed' => 12
        );
    	return $results;
    }

    static public function getSimilarArticles($article_id, $categories_id)
    {
        $limit = 5;
        $data_array = Article::latest()
            ->where('id', "!=", $article_id)
            ->where('categories_id', $categories_id)
            ->limit($limit)
            ->get();
        return ArticleController::decodeJsonDataFromArray($data_array);
    }

    static public function decodeJsonData($data) {
        $data["content"] = json_decode($data["content"]);
        return $data;
    }

    static public function decodeJsonDataFromArray($array_data) {
        foreach($array_data AS $data) {
            $data = ArticleController::decodeJsonData($data);
        }
        return $array_data;
    }
}
