---
title: 'Building My Own JavaScript Framework'
description: 'My brand new unnecessary website rewrite'
date: '2023-05-17'
snippet: ''
---

Building your own JavaScript framework can be a rewarding and challenging experience. It can help you learn more about the language, improve your coding skills, and create something useful for yourself and others.

Whilst there were some articles I found very useful, I found that most did not cover the details I really needed. When going through the process of building my own framework I found reading the source code of others to be the most useful. I would recommend reading the source code of React, Svelete and Preact to get a better understanding of how they work if you are interested in building your own framework.

## My Approach

Building a JavaScript framework is not a trivial task, but I found it to be very rewarding as you get to customise it to your desires. For my framework [documentx](https://github.com/westbrookdaniel/documentx) I chose to go with a library based JSX framework that is very close to vanilla javascript. I chose this approach because:

-   I wanted to learn more about how JSX works
-   JSX is well understood and there are many resources available
-   I wanted to make sure it easy to understand and use for others
-   Integrating with other libraries and build systems would be easier

I followed the footsteps of those who came before a great way to learn in general, and I followed that for this project. By starting with a simple client side framework I was able to understand JSX, rendering logic, and experiment rapidly before moving on to more complex features like server side rendering.

## Another Website Rebuild

Having a goal in mind was a great way to keep me motivated and focused. I decided to rebuild my personal website using my new framework. This was a great way to dogfood a framework and see how it would work in a real world scenario. I was able to identify issues and improve the framework as I went along, as well as revise my priorities and goals for the framework.

The new website is built using documentx (obviously) and hosted on [Railway](https://railway.app/). I plan on creating a serverless version powered by Vercel's build output api in the future, but for now, I found Railway outstanding to work with.

It features SSR (probably the hardest part), with client side hydration. On the client, very few libraries were used to keep with my goal of building most things myself (it was an arbitrary goal). As a result, the bundle size is very small and the site loads very quickly. It also had fun building features like the random theme generator and some automatic image processing for the images in blogs, and reducing layout shift.

I found a framework is a great way to learn more about JavaScript and improve my knowledge of the tools I use everyday. It was also a great way to build something that I could share with others and make my own. I would recommend it to anyone interested in learning more about JavaScript and how frameworks work.

Until next time!
