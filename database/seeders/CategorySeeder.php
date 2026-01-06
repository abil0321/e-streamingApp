<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Schema::disableForeignKeyConstraints();
        DB::table('categories')->truncate();
        $categories = [
            'Action',
            'Comedy',
            'Drama',
            'Horror',
            'Romance',
            'Science Fiction',
            'Western',
            'Animation',
            'Thriller',
            'Documentary',
            'Family',
            'Music',
            'Sport',
            'Mystery',
            'Crime',
            'Adventure',
            'Fantasy',
            'History',
            'Biography',
            'War',
            'Game'
        ];

        // $categories = array_unique($categories); // NOTE: Remove Duplicate (klo lagi mumet ada duplicate pakein aja ini)
        $data = [];
        $now = now();
        foreach ($categories as $category) {
            $data[] = [
                'title' => $category,
                // 'slug' => str()->slug($category),
                // 'slug' => str_replace(' ', '-', strtolower($category)),
                'slug' => Str::of($category)->slug('-'),
                'created_at' => $now,
                'updated_at' => $now,
            ];
        }

        DB::table('categories')->insert($data);
        Schema::enableForeignKeyConstraints();
    }
}
