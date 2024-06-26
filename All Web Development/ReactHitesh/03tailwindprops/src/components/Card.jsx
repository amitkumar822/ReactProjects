import React from 'react'

export default function Card() {
  return (
    <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
        <img class="w-24 h-24 rounded-full mx-auto" src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTjHb6WWIg4f3c49aX9k6jUpZlvMJutIMzJeifueSw9r6E0S0um" alt="" width="384" height="512"/>
        <div class="pt-6 space-y-4">
        <blockquote>
            <p class="text-lg font-medium">
            “Tailwind CSS is the only framework that I've seen scale
            on large teams. It’s easy to customize, adapts to any design,
            and the build size is tiny.”
            </p>
        </blockquote>
        <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">
            Amit Kumar Singh
            </div>
            <div class="text-slate-700 dark:text-slate-500">
            Staff Engineer, Algolia
            </div>
        </figcaption>
        </div>
    </figure>
  )
}
