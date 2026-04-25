---
title: the issue of ai slop
date: 2026-04-24
unlisted: true
---

Recently, I was a reviewer for a Hack Club program called [Jackpot](https://jackpot.hackclub.com/). The program itself was incredibly cool, and hats off to Emma for putting so much work and effort into organizing it, but the reviews were... depressing. Emma herself said [in a Slack message](https://hackclub.slack.com/archives/C0ADEGZL5HD/p1775945588784089):

> [A]round 80% of the reviews, was spent rejecting entire projects due to clear, full use of AI without minimal human contribution. Many of the submitted websites look almost identical, heavily vibe-coded, and in some cases include scripts designed to automatically track or generate hours.

I remember getting in a call with @owais and going through reviews, only for us to send every other project to each other, asking "is this AI again?" The worst part is that this isn't even an issue unique to Jackpot. It's also known that Flavortown faces issues with AI slop as well, to the point where Hack Clubbers joke about it quite often on the Slack. The AI issue has been getting progressively more prominent as time goes on, and it's worth a think over.

This isn't to say there are no good projects coming to YSWSes anymore. In fact, it's quite the opposite. During my time reviewing for Hack Club: The Game and Jackpot, I saw so many creative, high-effort, and amazing projects submitted, and it truly made me incredibly proud of our community (if not a little bit disappointed in myself for being so unaccomplished). But the truth is, a lot of slop is being submitted, and some of it even makes it past our review process. So, what can we do to reduce this?

## what is ai slop?

To address AI slop, we must first define what it is. Originally, this blog post was meant to do that: figure out what counts as too much AI usage and what is not. I put out a question in my personal channel [#maxs-cozy-planet](https://hackclub.enterprise.slack.com/archives/C0AL1T3CZ2S) on Slack, which sparked an extremely active thread of discussion, some of which was extremely funny, but ultimately went nowhere. We failed to arrive at any consensus.

![A Slack message from me asking "When is it moral to submit projects using AI to YSWSes? When is something "too much AI"?"](images/slack-q-toomuchai.png)
![A Slack message from @Rohan saying "I think Ai is fine aslong as it’s Claude"](images/aslong-as-its-claude.png)

I'll briefly sum up what little conclusions I was able to arrive at:

1. There are many different viewpoints on what is justified when it comes to AI usage.
2. My personal viewpoint is that AI code is no longer submittable when you can't understand your codebase to the point that you cannot change or fix it without relying on AI. (ib: @fireentity)
3. What defines something as "your project" vs. "AI's project" is very wishy-washy. Percentages don't work--it's almost impossible to get an accurate percentage of AI usage.

Using this, let's together arrive at a definition for what "AI slop" is:

> A low-effort, low-quality project made primarily using AI, usually to the point where AI usage is apparent without looking at its code.

This is nowhere **near** a perfect definition of what defines AI slop; the term is honestly very subjective. For the purposes of this blog post, let's use mine for now.

## why is ai slop so prevalent now?

It probably has to do with how big Hack Club is getting. It's not the whole cause, of course, but it would make sense. Hack Club is built on hackers -- people who build because they want to build, create because they want to create. As we expand, we gain more of a second type of Hack Clubber: the ones who join simply for prizes and rewards.

This isn't necessarily bad. The truth is, a lot of the hackers mentioned earlier (build because they want to build) started out as this second type of Hack Clubber. I joined looking for free stuff, and gradually fell in love with coding for the sake of coding and making for the sake of making.

But this isn't the case for all type 2 Hack Clubbers. Some are just looking to get prizes + get out. That's perfectly valid--but it's the methods you employ to achieve such ends that get you put into AI slop timeout corner.

The truth is, the fastest way to make working projects is to yell at Claude until it spits out something savory. Oh what the hack, even I'm guilty of this. The code for this blog was mostly vibecoded too, since I was too lazy to actually go and read documentation and watch tutorials on how to make one. I'd like to justify it to myself, saying that I learnt it from the AI or by reading the AI's code... and while this may be partially true, it doesn't beat actually learning how to make it myself, and making it myself... If you asked me to replicate it right now... I probably couldn't!

What this means for us is: we're getting lots of people who are joining for prizes and prizes alone, and we're growing into an age where it's extremely easy to generate the projects needed to earn the prizes. Put two and two together... the fastest and easiest way to get prizes is to AI generate projects, and so, instead of learning, building, making, creating... people are AI slopping.

I don't want to make you think that "ohhhh, everyone is just out to fraud hours and make slop to get prizes!" Truthfully, a good amount of people may not even realize that they have made AI slop; we could do a better job helping these people understand what is so great about making projects.

I've been doing a whole Latta yapping, and not a whole Latta giving suggestions--so, let's talk solutions.

## clearer AI guidelines

Some programs seem to have some arbitrary percentage limit in terms of AI usage. Off the top of my head, HCTG lists a 30% AI limit and Macondo has a 40% limit.

![Section from HCTG submission guidelines detailing 30% AI limit](images/hctg-30-percent.png)
![Message from @NotARoomba detailing a 40% AI limit](image.png)

In theory, these are good ways to filter through AI slop, but in practice, <u>percentages do not work.</u> There's no way to detect how much code was AI and how much wasn't. At the end of the day, these random numbers are just a nothing burger. As a reviewer, I look at a project and I try to gauge whether human effort was put into the project. I try to gauge if AI was used for small, minor tasks, or if it was used to generate the main functionality of the project. I try to gauge if the user has gone "uhhhh claude make me a website," or sat there meticulously thinking of things to add, writing out to Claude exactly what they want and how they want Claude to implement it.

The solution is to detail these exactly. What are reviewers looking for? How should we (particpants) be using AI? How shouldn't we be? Not "Yeah, keep it under x%" but "Only use AI for mundane tasks! Make sure you still understand your code! Put effort into making it look human-made!"

##
