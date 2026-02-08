---
layout: post
title: "You'll Be Replaced"
date: 2026-02-09
---

Hope this hook was enough to pull you in.

The last time I wrote something, the internet convinced me to quit my previous job, which was 8 years ago, and I'm forever grateful to those internet anons.

I don't know what motivated me to write this, but I felt like the internet is putting a lot of pressure on SDEs right now. I feel like this is an outlet for me to calm myself, and in that process, if you can take anything away, that's an extra W for me.

The title is something that most of you would've heard, and it's true for any human in anything in life. But here, I'm focusing on how half-baked influencers and some big CEOs say software engineering is on its way to death. So let me jump right into it.

## A Confession I'm Not Proud Of

I need to tell you something uncomfortable.

There's a category of work that every engineering team has. The kind nobody fights for in sprint planning. Migrating a config format. Writing integration tests for a module nobody's touched in two years. Stitching together API endpoints that follow a pattern you've built a hundred times before. For years, that work went to the newest person on the team. Not as punishment, but as education. You can't understand a system by reading the wiki. You understand it by getting your hands dirty in the parts nobody glamorises. That's where you learn why a field is nullable, why that retry logic exists, why there's a comment that says "DO NOT CHANGE THIS" with no further explanation. Those small, unglamorous tasks were the real onboarding.

I don't hand out that work to people anymore. I hand it to an LLM.

The output is faster, more consistent, and I don't have to block two hours for a walkthrough. On paper, it's a pure efficiency win.

But I've started asking myself a question I don't have a comfortable answer to: if nobody does the grunt work, how does anyone build the instinct that comes from doing it?

Every week, a new headline tells you software engineers are finished. AI can code now. Pack it up. Learn plumbing.

And every week, I watch the same AI tools hallucinate a dependency that doesn't exist, generate a perfectly structured service that ignores our business logic.

So let me save you the anxiety spiral: AI is not going to replace software engineers.

But here's what nobody's telling you. It's already replacing a specific type of software engineer. The one who only knows how to write code. And if that sentence doesn't make you even slightly uncomfortable, you're either very senior or very asleep.

## The Real Threat Isn't AI. It's the Gap It's Creating.

Our industry has always had its fault lines. In 2015, the big split was front-end versus back-end. In 2020, it was product engineers versus infra specialists. In 2025, the divide is between "AI-aligned" and everyone else. This time, the gap isn't about what you build. It's about whether you're seen as part of the future or part of the cost to cut.

The distribution of skill in our industry is starting to look like a barbell, and the weight is all at the extremes.

On one side, you've got the veterans. People who've shipped systems that handled Black Friday traffic, who've been paged at 3 AM because a config change cascaded into a full outage, who've spent a decade collecting the kind of scars that no tutorial can simulate. These people are using AI the way a seasoned carpenter uses a nail gun. They're faster, but their judgment about where to aim hasn't changed. They know what to ask for, and more critically, they can smell when the output is wrong before they even run the tests.

On the other side, you've got people who can orchestrate an LLM into producing a working app in an afternoon but have never traced a memory leak or reasoned about what happens when two threads hit the same resource. They ship fast. They look productive. But the moment something breaks in a way the model hasn't seen, they're stuck.

The middle is where growth used to happen. You'd write something, a senior would rip it apart in review, you'd feel the sting, and you'd never make that mistake again. That feedback loop is what turned average developers into good ones. It was slow, sometimes painful, and completely irreplaceable.

That loop is fracturing. When I review a person's code, we have a conversation. I can explain not just what's wrong but why it matters, what it would look like at scale, what happened the last time someone made this exact mistake in production. The person on the other end walks away with context they'll carry for years. When I look at AI-generated code and it's wrong, I adjust the prompt. The output might improve. But nobody on the other end absorbed anything. There's no scar tissue forming. No instinct being built. Just a marginally better response to a marginally better prompt.

We're accumulating codebases full of logic that works today but that no single person on the team deeply understands. Entire services written by a model, reviewed quickly because they "looked right," and shipped because the deadline was yesterday. That's not a productivity revolution. That's a slow-moving trust problem wearing the disguise of efficiency.

## Why Software Engineers Are More Exposed Than They Realise

Dario Amodei, the CEO of Anthropic, wrote an essay called "Machines of Loving Grace" that most engineers should read but few have. His central argument is that AI will transform different industries at wildly different speeds, and the bottleneck isn't intelligence. It's the physical world.

In healthcare, AI might be able to design a breakthrough drug in hours, but clinical trials still take years. In manufacturing, an AI can optimise a supply chain overnight, but building the factory still takes eighteen months. In agriculture, biology, energy... the atoms move slowly even when the bits move fast.

Software has no such buffer.

Our entire industry operates in bits. Code in, code out. No clinical trials. No physical prototypes. No regulatory waiting periods. The feedback loop is instant. So when AI gets good enough, the disruption hits software engineering first and hardest. While a hospital is still running trials on an AI-designed drug, our industry will have already absorbed three generations of AI tooling.

Amodei asks a question in his essay that should haunt every developer: if AI removes the need for basic labour, what happens to the entry ramp? He's talking about developing nations losing their comparative advantage when automation replaces cheap manufacturing. But the parallel to our industry is chilling. If AI removes the need for basic coding labour, the entry ramp for Junior Developers narrows the same way.

And here's the part that non-IT industries should be paying attention to: they're not immune. They just have a longer fuse. Software engineers are the canaries in the coal mine. How we adapt, or fail to, will be the playbook (or the cautionary tale) for every other industry.

## The Trap of "Keeping Up"

Now here's the irony. I just told you to skill up. To learn systems, to deepen your domain knowledge, to invest in the things AI can't replicate. And the first thing most people do after reading advice like that is open Twitter, subscribe to three more AI newsletters, and start drowning in the firehose.

Last week, two major model releases dropped within twenty minutes of each other. The week before, a new video generation tool apparently "changed everything." The week before that, something else came out that I genuinely can't even remember. This is every single week now. New models, new tools, new benchmarks, new articles telling you that if you're not using *this* right now, you're already behind.

That low-grade pressure never fully goes away. And it's by design.

The AI content ecosystem runs on urgency. Every creator, every newsletter, every Twitter thread gets more reach when a release sounds like the biggest thing in history. "This changes everything" performs. "This is a marginal improvement for most people" doesn't. So the volume is always at ten, even when the actual impact is a three.

And here's the psychology: every new release you haven't tested yet doesn't feel like an opportunity. It feels like a loss. Your brain processes "I might be missing out" roughly twice as intensely as "cool, a new option." Multiply that by three releases a week and you get a specific kind of paralysis. People who know an enormous amount about AI but haven't actually built anything meaningful with it. Bookmarked threads pile up. Subscriptions run simultaneously. Prompt packs collect dust.

Keeping up with AI does not mean knowing every model the day it drops, having an opinion on every benchmark, or testing every tool within the first week. That's consumption, not competence.

Keeping up means having a filter that answers one question: does this matter for my work? Yes or no. A new video generation model is irrelevant unless you're in video production. A coding-focused model release doesn't matter unless you ship code daily. Half of what drops in any given week has zero impact on your actual workflow.

The engineers who look "ahead" aren't consuming more. They're consuming dramatically less, but the right less. They pick one or two tools, go deep, and ignore the rest until it proves itself relevant. That discipline is a skill in itself, and it might be the most underrated one in this entire conversation.

## The Part Nobody Wants to Hear

I want to be honest with you, because I think you deserve honesty over comfort.

Not everyone is going to make it.

## The One Advantage Software Engineers Have

Here's the thing that gives me genuine hope, and it's something I haven't seen anyone else write about.

Non-IT industries don't have the culture to adapt to this. A hospital can't "move fast and break things." A bank can't ship AI-generated risk models without months of regulatory approval. Traditional industries are built on process, compliance, and institutional inertia.

Software engineering is the opposite. Our industry has been reinventing itself every five years for decades. We went from waterfall to agile. From monoliths to microservices. From on-prem to cloud. From REST to GraphQL. Every time, the people who adapted thrived, and the people who clung to the old way got left behind.

That adaptability is the skill. Not any specific framework or language, but the muscle memory of reinvention itself. We are the one industry that is culturally built for exactly this kind of disruption. But only if we choose to exercise that muscle instead of freezing.

## So, Will AI Replace Software Engineers?

No. But the definition of "software engineer" is being rewritten right now, in real time, and you're either holding the pen or you're watching it happen to you.

The engineers who treat AI as a colleague rather than a threat, who invest in the skills AI genuinely cannot replicate, will come out ahead. They'll be faster, sharper, and more valuable than any previous generation of developers.

The engineers who assume their current skill set is enough, who dismiss the urgency, who think "this too shall pass"... they're the ones the headlines are actually about.

And the companies that decided new graduates are an expense they can optimise away? They're going to look around in five years and realise they have a room full of tools and nobody left who learned how to think.

The ladder isn't broken. It's being rebuilt. But only by the people who decided to pick up the tools.
