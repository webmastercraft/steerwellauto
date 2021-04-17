<?php

namespace App\Http\Controllers\Api;

use App\Faq;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class FaqController extends Controller
{
    static public function getAll()
    {
        $faqItems = DB::table('steer_well_faq_items')->get();
        foreach ($faqItems as $faqItem) {
            $faqItem->content = json_decode($faqItem->content);
        }
        $faqCategories = FaqController::getAllCategories();

        foreach ($faqCategories as $category) {
            $faq_id = $category->id;
            $filteredFaqItems = $faqItems->filter(function($q) use($faq_id){
                return $q->faq_categories_id == $faq_id;
            });
            $arrayData = array();
            foreach ($filteredFaqItems as $filteredFaqItem) {
               array_push($arrayData, $filteredFaqItem);
            }
            $category->items = $arrayData;
        }
        return $faqCategories;
    }

    public function getFaqsById($faq_categories_id) {
        return Faq::where('faq_categories_id', $faq_categories_id)->get();
    }

    static public function getAllCategories()
    {
        return Faq::leftJoin('steer_well_faq_categories', 'steer_well_faq_categories.id', '=', 'steer_well_faq_items.faq_categories_id')
                ->groupBy('steer_well_faq_items.faq_categories_id', 'steer_well_faq_categories.id', 'steer_well_faq_categories.title', 'steer_well_faq_categories.image_path', 'steer_well_faq_categories.description')
                ->select('steer_well_faq_categories.id', 'steer_well_faq_categories.id', 'steer_well_faq_categories.title', 'steer_well_faq_categories.image_path',  'steer_well_faq_categories.description', DB::raw('COUNT(steer_well_faq_items.id) as item_count'))
                ->get();
    }
}
