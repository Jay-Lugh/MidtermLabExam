<?php
namespace Database\Seeders;

use App\Models\Book;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;

class BookSeeder extends Seeder
{
    public function run()
    {
        $faker = Faker::create();

        foreach (range(1, 10) as $index) {
            Book::create([
                'title' => $faker->sentence(3),
                'author' => $faker->name,
                'published_year' => $faker->year,
                'genre' => $faker->word,
                'description' => $faker->paragraph,
            ]);
        }
    }
}