import React from "react"
import Navbar from "../../components/Navbar"
import {
    A,
    CODE,
    H1,
    H2,
    H3,
    I,
    IMG,
    INLINECODE,
    LI,
    P,
    Q,
    TITLE,
    UL,
} from "../../components/BlogComponents"
import Img1 from "../../public/blog/the-shitcoin-thesis/1.jpg"
import Img2 from "../../public/blog/the-shitcoin-thesis/2.png"
import Img3 from "../../public/blog/the-shitcoin-thesis/3.png"
import Img4 from "../../public/blog/the-shitcoin-thesis/4.png"
import Img5 from "../../public/blog/the-shitcoin-thesis/5.png"
import Img6 from "../../public/blog/the-shitcoin-thesis/6.png"
import Container from "../../components/Container"

const TheShitcoinThesis = () => (
    <>
        <Navbar />
        <Container>
            <TITLE>{`The Shitcoin Thesis`}</TITLE>
            <I>Karol Proksa, July '24</I>
            <H1>Introduction</H1>
            <P>
                In the summer of 2024, shitcoins are one of the hottest topics
                in the crypto space. What distinguishes shitcoins from other
                trendy crypto narratives such as DePIN, RWA or AI is that it is
                hard for many users, investors and crypto-natives to wrap their
                heads around them. This article aims to bridge the gap between
                shitcoins and crypto stakeholders.{" "}
            </P>
            <H2>Shitcoin, defined</H2>
            <P>
                Many consider every token or coin that is not Bitcoin to be a
                shitcoin. Putting that outdated definition aside, I define
                shitcoins as the PvP digital currencies that exist on
                decentralized exchanges. Notice that my definition doesn't
                specify the market cap, utility or technology behind the token.
                It's about the speculative, PvP nature of a token that makes it
                a shitcoin.
                <br />
                <br />I am not trying to argue that my definition is the only
                correct one. In my view, it is the most fitting for the current
                market situation (or <I>meta</I>) with shitcoins. There are
                multiple ways to define a shitcoin, one might even say:
            </P>
            <Q>Shitcoin is in the eye of the (be)holder.</Q>

            <H2>Shitcoins are what happens in a truly free market</H2>
            <P>
                Throughout history there have been many speculative investment
                opportunities which might resemble modern shitcoins. One example
                would be the South Sea Stock in the 18th century. Below you can
                see a price chart for the stock with marked trades of Sir Isaac
                Newton.
            </P>
            <IMG src={Img1} alt='trades of sir isaac newton' />
            <Q>Was Newton the first degen?</Q>
            <P>
                A question that might come to your mind now is: how is the price
                chart of a company founded over 300 years ago so similar to that
                of many shitcoins you would find on Solana. As it turns out, it
                was long before the blockchain when people started looking for
                high-risk investments which could multiply their portfolio.
                Taking high-risk bets with potentially high reward is deeply
                embedded in human psychology. We are naturally wired to take
                them (Amparan and Kreinovich, 2021). Humans have been
                speculating for hundreds (if not thousands) of years. Shitcoins
                are simply the modern embodiment of that.
                <br />
                <br />
                Permissionless markets allowed anyone to create a digital asset
                and provide liquidity for it on a decentralized exchange. In
                simple terms: DEXes allowed anyone to launch a shitcoin and gain
                global exposure among degens. Actions of said markets provide us
                with an insight into human psychology and showcase a real-world
                example of a <I>truly free</I> market.
            </P>
            <br />
            <br />
            <b>Shitcoins are exactly what happens when:</b>
            <UL>
                <LI>
                    traders are anonymous and can place orders from anonymized
                    wallets
                </LI>
                <LI>
                    there are no penalties for having an unfair advantage
                    (insider info, unregulated market-making, wash trading)
                </LI>
                <LI>
                    issuers are not penalized for unethical or unfair actions
                </LI>
                <LI>issuers can choose to remain anonymous</LI>
                <LI>
                    inequalities of capital are relatively low among
                    participants (= Gini coefficient is low)
                </LI>
            </UL>
            <H1>Player Versus Player</H1>
            <P>
                Financial markets are competitive. They are inherently steered
                by greed and fear. While it is arguable whether TradFi markets
                are PvP, shitcoins definitely are.
            </P>
            <H2>Backbone of decentralized exchanges</H2>
            <P>
                Automated market making (AMM) seen on decentralized exchanges is
                very different from the order-book market making present on
                traditional exchanges. While these two may look similar on the
                surface, the forces driving the price and its rate of change
                work differently.
                <br />
                <br />
                In AMM, the price is derived from the ratio of tokens supplied
                to a pair (example: Token A + WETH) and the amount of liquidity
                supplied. Liquidity here translates to: "some token which has
                real value", these most often are WETH or stables. This
                mechanism can artificially simulate TradFi-like behavior; if the
                demand for a shitcoin rises and more investors buy the token
                (play long), they add more WETH into the liquidity pool and get
                the desired shitcoin in return. Therefore they change the ratio
                of the pair, driving the price up.
                <br />
                <br />
                In orderbook-based markets, the price is directly set by
                investors when placing an order. The amount of liquidity is
                irrelevant, as any market participant can place an order at any
                price they wish.
            </P>
            <H2>Why is it PvP?</H2>
            <P>
                The conclusion from the AMM mechanism is simple: you can only
                profit from your investment if someone buys <I>after</I> you.
                Since the price is determined by the DEX router and your
                counterparty while trading is the liquidity pool (LP) and not
                the other traders, it's only viable to turn a profit when then
                ratio of the token (shitcoin) you bought to the liquidity (real
                money) decreased in the LP.
                <br />
                <br />
                The easiest way to understand that is to imagine two buckets. In
                one of them there is cash (let's say USD), in the other one
                there are magic beans. The price of a magic bean is derived from
                the ratio of magic beans to cash (between buckets). Every time
                someone buys a magic bean, they put money into the cash bucket.
                This mechanism results in every subsequent magic bean being sold
                at a higher price (since the bean/cash ratio keeps declining).
                <br />
                <br />
                If one were to <I>sell</I> a magic bean, its price might've
                changed and by putting a magic bean back to the bucket, they can
                take a higher amount of money from the cash bucket than they
                initially put in.
            </P>
            <H1>When will the music stop?</H1>
            <IMG src={Img2} alt='no shitcoin meme' />
            <P>
                As you dive deeper into shitcoins, you might start thinking:
                "when will this end?". The unregulated shitcoin market breaks
                social norms and encourages trading with an unfair advantage
                which naturally sparks discussion about its regulation.
                <br />
                <br />
                I am far too biased to provide a reasonable opinion on this, but
                I admire how threatened people feel when faced with a truly free
                market. Many are used to what was explained to them by the
                existing power structures -- the stock market, real estate, US
                Dollar and gold. They start feeling uncomfortable whenever they
                encounter something new that lies outside their worldview. It's
                easy to categorize shitcoins (or the entirety of crypto) as a
                scam. At least then it fits with what you've been taught your
                entire life. Expanding your perspective, creating a new category
                for it and integrating it with your current beliefs is
                significantly more difficult.
                <br />
                <br />
                It's the social norm now to invest into TradFi assets. Some
                social circles would even praise you for being smart with your
                money and putting it into effective use.
                <br />
                <br />
                Unfair advantage is also a part of TradFi; it's just not meant
                for you. Congressmen, hedge funds and members of wealthy
                families have the privilege to trade using insider info (
                <I>US Politician Stock Trade Tracker</I>, n.d.). You can't do
                that. Instead, you can buy an S&P 500 ETF which yields a
                whooping 10% per year (~7% adjusted for inflation). Of course,
                you should subtract the management fee of the firm you're
                investing your money with from that. The game is not rigged in
                your favor.
            </P>
            <H2>How to kill shitcoins?</H2>
            <P>
                Since shitcoins usually happen fully on-chain, it is hard to
                kill them. The difficulty of stopping them will rise along the
                adoption of crypto and the increasing number of network nodes.
            </P>
            <P>
                <b>
                    From my current understanding, shitcoins will exist as long
                    as:
                </b>
            </P>
            <UL>
                <LI>
                    you can connect to the blockchain and execute transactions
                </LI>
                <LI>
                    crypto is exchangeable for real money <I>OR</I> stablecoins
                    exist
                </LI>
            </UL>
            <H2>What if __ bans shitcoins?</H2>
            <P>
                Of course there is a regulatory risk regarding shitcoins (and
                for that matter all of crypto). The problem here is the
                execution. Many jurisdictions may choose to ban
                trading/creating/promoting shitcoins. What they cannot do is
                undeploy the UniswapRouterV2 contract. As long as you can
                connect to the blockchain and execute transactions, shitcoins
                will be just fine. The regulators could attempt to ban accessing
                the blockchain at the node level, for example by restricting
                access to all Ethereum clients. In that case, I am very glad we
                have VPNs and torrents.
            </P>
            <H1>The next 1000X</H1>
            <P>
                The cumulative return of Bitcoin since 2011 exceeded 20,000,000%
                (= 200,001X) (
                <I>Bitcoin returns history, historical BTC Performance</I>,
                2024). A dollar invested in Bitcoin in 2011 would be worth
                around $200,000 today. An ROI this high could not be met by any
                other asset class by far. For comparison, one dollar invested
                into S&P500 in 1928 would be worth around $7,870 today (
                <I>Historical returns on stocks, Bonds and bills: 1928-2023</I>
                ). In a little over a decade, Bitcoin yielded a significantly
                higher return than S&P500 did in almost a century. This return
                set a new, high standard for the entire industry.
                <br />
                <br />
                Investors deploying capital to shitcoins are usually not looking
                to earn 10% or 20% per year. Returns which might seem insane
                from the TradFi perspective are anticipated by crypto-native
                investors on daily basis. Market trends (or <I>the meta</I>) are
                constantly changing, yet the search for "the next 1000X" is what
                drives market participants. It is also deeply embedded in the
                crypto macro trends.
            </P>
            <H2>RWA, DePIN, AI, GameFi, NFT, WAGMI, LFG</H2>
            <P>
                Whatever the trendy word of the week is, the tendency of the
                shitcoin market participants to bet on arising opportunities is
                constant. It is a part of every crypto cycle, with new
                narratives emerging even in the bear market.
                <br />
                <br />A blast from the past which might remind you of simpler
                times is <I>the metaverse</I>. A robust, VC-backed narrative
                that resulted in humongous valuations and 650 users (Reynolds,
                2022). The metaverse narrative turned out to be a PvP
                speculation game and not the groundbreaking technology it was
                promised to be. Given that, it is fair to call all metaverse
                tokens shitcoins -- at least according to my definition. After
                all, it was just a game entertained by market participants where
                the goal is it enter and exit (hopefully turning a profit)
                before it all comes crashing down.
                <br />
                <br />I am sure that we will see overhyped narratives this
                cycle; and the next one; and the one after it. We might even see
                a day where shitcoins are the narrative themselves.
            </P>
            <H1>Market participants</H1>
            <video
                controls
                src={"/blog/the-shitcoin-thesis/vid1.mp4"}
                autoPlay
                muted
                playsInline
                className='h-[80vh]'
            />
            <P>
                Who would participate in an unregulated market which is known
                for its notorious scams, high volatility and low liquidity?
                Trading volumes in the shitcoin market are mostly generated by
                <I>degens</I> -- individual investors deploying capital into
                high-risk bets on decentralized exchanges.
            </P>
            <P>
                While it is hard to characterize a global community of diverse
                people from different backgrounds as a whole, my best
                description of degens includes:
            </P>
            <UL>
                <LI>
                    lower average age (likely in the range of 20-35 yo; more
                    research required) than TradFi market participants
                </LI>
                <LI>traders usually only manage their own funds</LI>
                <LI>
                    higher value of assets under management compared to retail
                    investors
                </LI>
                <LI>very quick due diligence process</LI>
                <LI>
                    social experience of investing -- the game is about getting
                    and sharing information with the right people
                </LI>
            </UL>
            <H2>The degen community</H2>
            <P>
                It is worth noting that degens are not isolated investors but an
                internet community that has developed to the point of forming
                its own culture. The culture surrounding degens often includes a
                mix of humor, camaraderie, and a shared understanding of the
                inherent risks involved in their trading activities. A result of
                this culture is the formation and popularization of a lingo
                specific to this group. Degens communicate using relevant memes,
                acronyms and newly-formed words which are used to describe
                what's happening in the market.
            </P>
            <IMG src={Img3} alt='' />
            <H2>The lingo</H2>
            <P>
                When observing how degens talk to each other, it might remind
                you of the internet forum called 4chan. One of its boards, /biz,
                used to be a place to discuss all of business and finance,
                however it is now dominated by degens promoting and discussing
                new shitcoins in the unfiltered, censorship-free environment.
                The language used by the forum's participants closely resembles
                how degens talk to each other in Telegram chats.
                <br />
                <br />
                All of the new terms used by the community are effectively an
                entry barrier to the industry. Purposefully or not, it
                distinguishes the insiders (degens) from the outsiders (general
                public). This mechanism is also present in other professional
                fields, such as computer science or finance. I imagine it's only
                natural for people to develop some sort of occupational
                camaraderie through a lingo that's exclusively understandable to
                them. Also, the process is most likely not artificial -- like
                creating marketing buzz words or slogans. The new words used by
                degens come from the fundamental need to <I>name</I> things to
                make communication easier.
            </P>
            <H1>How big is it now?</H1>
            <P>
                While shitcoins might seem like a funny gambling substitute for
                crypto-natives, the money pouring through decentralized
                exchanges is serious. <br />
                <br />
                The weekly trading volume generated through frontends connected
                to decentralized exchanges reaches billions of dollars. This
                only includes manual transactions made by degens, even more
                volume is generated by bots, but that's outside the scope of
                this article.
            </P>
            <IMG src={Img4} alt='' />
            <P>
                (<I>Illuminating ethereum's order flow landscape.</I>,
                orderflow.art)
            </P>
            <H1>How far can this go?</H1>
            <P>
                Shitcoins disrupted financial markets and changed the perception
                of valuations for good. Some degens go as far as to say that
                shitcoins <I>shouldn't</I> have any utility, since that's
                something you <I>can</I> price.
                <br />
                <br />
                What's impossible to price is a coin with absolutely nothing
                behind it, except a cute puppy wearing a pink hat. Many TradFi
                investors would say that this shitcoin is worth nothing, since
                it is literally made up and has no connection to any real value.
                However, the coin somehow surpassed $2.5 billion in valuation. I
                guess it's not so worthless after all.
            </P>
            <IMG src={Img5} alt='dogwifhat' />
            <I>
                Archi, the dog wif hat. A mascot of the dogwifhat ($WIF) token;
                valued at $2.5 billion at the time of writing this article
            </I>
            <H2>So where is the value?</H2>
            <P>
                The value lies in the community behind it. $WIF would never go
                that far without a devoted group of supporters. I only
                understood what's really behind $WIF during my visit in Brussels
                for EthCC 2024. While riding from one side event to another on a
                Lime scooter, I wore a <I>wifhat</I>. A wifhat is a pink knitted
                hat similar to the one worn by Archi, the dog wif hat. Zooming
                through the streets of Brussels, I heard strangers shouting "hat
                stays on!" or "dogwifhat!" from the sidewalk. The recognition
                and support for dogwifhat is global. The shitcoins's mascot
                gathered a huge community of investors who support the project
                beyond PvP.
                <br />
                <br />
                Currently the biggest shitcoin in the market is Dogecoin with a
                valuation of about $18 billion. Given that both $DOGE and other
                shitcoins have already flipped multiple "serious" projects, sky
                seems to be the limit for them.
                <br />
                <br />I am sure the market will continue to change and evolve,
                since we are still in the experimental phase, but I am betting
                that shitcoins will continue as long as crypto exists. You can
                either be a hater desperately fighting shitcoins or accept them
                as the part of crypto they are.
            </P>
            <IMG src={Img6} alt='buy shitcoins and make money' />
            <H1>Conclusion</H1>
            <P>
                For the first time in history, there exists a global market that
                is <I>truly free</I>. How the degens are using it is an insight
                into human psychology and how financial markets behave if there
                are no legal, technological and moral regulations on what can be
                done.
                <br />
                <br />
                Despite the controversy they're bringing, shitcoins are a big
                part of the crypto industry. I'm betting that this niche of
                crypto will continue to grow rapidly, since unlike in many other
                segments, there are actual people who show real interest in
                them.
                <br />
                <br />A crypto-native might choose to be a devoted hater of
                shitcoins, however the past performance of the shitcoin market
                suggests that it's not going to disappear. The trading volumes
                of degens are reaching new all-time-highs and there seems to
                exist an untapped market of retail traders who are not onboarded
                to DEX trading <I>yet</I>.
                <br />
                <br />
                While the governments might try to silence shitcoins, they
                cannot kill them. The miracle of decentralized technologies is
                that they're very hard to stop. The challenge to stop shitcoins
                will continue to grow with the rising number of degens
                participating in this <I>shit show</I>.
                <br />
                <br />
                <b>See you on-chain. Onward.</b>
            </P>
            <H1>FYI</H1>
            <P>
                Since the shitcoin market is still very immature, there is
                little research regarding its quirks. Verified facts are cited
                in this article. The rest of it consists of my opinions and
                speculation based on my experience with shitcoins. NFA.
            </P>
            <H1>Citations and references</H1>
            <UL>
                <LI>
                    Amparan, David and Kreinovich, Vladik,{" "}
                    <I>"Why People Overestimate Small Probabilities?"</I>{" "}
                    (2021). Departmental Technical Reports (CS). 1625.
                    <A href='https://scholarworks.utep.edu/cs_techrep/1625'>
                        https://scholarworks.utep.edu/cs_techrep/1625
                    </A>
                </LI>
                <LI>
                    <I>Bitcoin returns history, historical BTC Performance</I>.
                    Coinglass. (2024, July 31).{" "}
                    <A href='https://www.coinglass.com/today'>
                        https://www.coinglass.com/today
                    </A>
                </LI>
                <LI>
                    New York University,{" "}
                    <I>
                        Historical returns on stocks, Bonds and bills: 1928-2023
                    </I>
                    . (n.d.).{" "}
                    <A href='https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html'>
                        https://pages.stern.nyu.edu/~adamodar/New_Home_Page/datafile/histretSP.html
                    </A>
                </LI>
                <LI>
                    <I>US Politician Stock Trade Tracker</I>. (n.d.).
                    <A href='https://www.capitoltrades.com/politicians'>
                        https://www.capitoltrades.com/politicians
                    </A>
                </LI>
                <LI>
                    Reynolds, S. (2022, October 18).{" "}
                    <I>
                        {" "}
                        Dappradar says Decentraland has 650 daily active users
                    </I>
                    .
                    <A href='https://www.coindesk.com/markets/2022/10/18/dappradar-says-decentraland-has-650-daily-active-users/'>
                        https://www.coindesk.com/markets/2022/10/18/dappradar-says-decentraland-has-650-daily-active-users/
                    </A>
                </LI>
                <LI>
                    <I>
                        Illuminating ethereum's order flow landscape.
                        Orderflow.art (n.d.).{" "}
                        <A href='https://orderflow.art/frontends'>
                            https://orderflow.art/frontends
                        </A>
                    </I>
                </LI>
            </UL>
        </Container>
    </>
)

export default TheShitcoinThesis
