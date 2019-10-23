import React, { Component } from 'react'
import Card from './cards';

export default class cardRender extends Component {
    constructor(){
        super()
        this.state ={
            news : [
            {  
                'heading': "'None of them lost their own to terrorism': J&K governor", 
                'brief': 'Alleging that the "affluent and powerful" sections have crushed the dreams of the youths in Kashmir and destroyed their lives, Governor Satya Pal Malik said on Tuesday that leaders of Hurriyat, mainstream politicians, clerics in J&K have used theirinfluence to get the children of ordinary Kashmiris killed while none of them lost their own to terrorism.', 
                'category': 'India', 
                'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71705544.cms?width=320&height=183&quality=100'
            }, 
            {
                'heading': 'Social media norms: SC allows transfer of pleas from high courts', 
            'brief': "Accepting Facebook's plea, the Supreme Court on Tuesday allowed the transfer of various petitions, related to the linkage of social media profiles with Aadhaar from different high courts to the top court. The Centre informed the SC that the entire process of finalising guidelines for the regulation of the social media in India will be completed by January 2020.", 
            'category': 'India', 
            'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71702818.cms?width=320&height=183&quality=100'
            },
            {
                'heading': 'Abhijit Banerjee flags concern over banking crisis', 
            'brief': 'Flagging concerns about the banking crisis in India, Nobel laureate Abhijit Banerjee on Tuesday said that aggressive changes are required to deal with the situation. He said that there is a need to bring down the stake of the government to below 50 per cent in banks so thatthe decisions are taken without fear of Central Vigilance Commission (CVC).', 
            'category': 'Business', 
            'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71704540.cms?width=320&height=183&quality=100'
            },
            // {
            //     'heading': 'CoA reign ends as Sourav Ganguly set to take over as BCCI prez', 
            // 'brief': "Sourav Ganguly is the unanimous nominati
            // on for the post of BCCI president along with Union home minister Amit Shah's son Jay as the secretary. However, Ganguly will have a curtailed tenure of around nine mo
            // nths as he would need to demit office by the end of July, next year as per the provisions of new constitutions, which makes 'Cooling Off' period mandatory after six y
            // ears in office.", 
            // 'category': 'Sports', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71706853.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'Infosys sha
            // res nosedive nearly 17%', 
            // 'brief': "Infosys shares plummeted 16.21% to close at Rs 643.30 on the BSE. During the day, it tumbled 16.86 per cent to Rs 638.30, the most
            //  since April 2013. On the NSE, it plunged 16.65% to close at Rs 640. The sharp fall wiped out Rs 53,450.92 crore from the company's market valuation on concerns over
            // a whistleblower complaint against unethical practices by two executives.", 
            // 'category': 'Business', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71704827.cms?w
            // idth=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'Sickened by gay boss, Chhattisgarh youth cuts him into three', 
            // 'brief': 'Police said that in his confession, 28-year-o
            // ld Shankar Kumar Paswan said that the deceased Sandip Singh was a homosexual and he would provide him labour job on contract and would further force him into having p
            // hysical relations.  Fed up with sexual abuse, Shankar slit his boss’ throat, cut his body into three pieces and disposed it at different locations.', 
            // 'category': 'Cit
            // y', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71706671.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'Sourav Ganguly has not spoken to me about Dhoni
            //  yet: Virat Kohli', 
            //  'brief': "India captain Virat Kohli on Tuesday said he hasn't had any conversation with Sourav Ganguly with regards to Mahendra Singh Dhoni's cric
            // keting future and believes that the BCCI's president-elect will get in touch with him when he needs to. Ganguly had earlier said that he would like to speak to the se
            // lectors as well as Dhoni to know what they had in mind.", 
            // 'category': 'Sports', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71703577.cms?width=320&height=183
            // &quality=100'
            // },
            // {
            //     'heading': "Shun Malaysia, India's palm oil buyers told amid Kashmir standoff", 
            // 'brief': "India's top vegetable oil trade body has asked its members
            // to stop buying palm oil from Malaysia, an unprecedented call aimed at helping New Delhi punish the country for criticising India over its policy toward Kashmir. India
            //  was Malaysia’s third-largest export destination in 2018 for palm oil and palm-based products worth 6.84 billion ringgit ($1.63 billion). ", 
            //  'category': 'Business', '
            // imgUrl': 'https://timesofindia.indiatimes.com/thumb/71703032.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': "When Nobel winner Abhijit Banerjee shared PM Modi's
            // joke", 
            // 'brief': 'After his meeting with PM Modi, Nobel laureate Abhijit Banerjee was asked to share his "critical" views on Indian economy. Banerjee replied, "The PM
            // started the meeting by cracking a joke about how the media is trying to trap me into saying anti-Modi things. He\'s been watching TV, he\'s been watching you guys, he
            //  knows what you are trying to do. So, I think stop."', 
            //  'category': 'Business', 
            //  'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71704345.cms?width=320&height=183&
            // quality=100'
            // },
            // {
            //     'heading': 'Exit polls predict more trouble for Congress', 
            // 'brief': 'As per exit polls predictions, Congress is likely to lose both Haryana and Mahara
            // shtra where the party has historically been the dominant player. Despite a chance of being wrong, the projections will please BJP as it indicates that the opposition’
            // s campaign about a stalling economy — a major theme in political and policy circles — has not cut much ice with voters.', 
            // 'category': 'India', 
            // 'imgUrl': 'https://time
            // sofindia.indiatimes.com/thumb/71697036.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'Chidambaram gets bail in INX case, ED custody continues', 
            // 'brief': "The Su
            // preme Court on Tuesday granted bail to Congress leader and former finance minister P Chidambaram in the INX Media corruption case lodged by the CBI. A bench headed by
            //  justice R Banumathi set aside the Delhi high court's September 30 verdict denying bail to Chidambaram in the case. The former finance minister is currently in ED cus
            // tody till October 24.", 
            // 'category': 'Business', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71699941.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': "'To
            //  hell with the pitch', Ravi Shastri on Team India' mindset", 
            //  'brief': 'India wrapped a 3-0 whitewash of South Africa by winning the third and final Test by an innings
            //  and 202 runs on day four at Ranchi. Lauding the team\'s mindset, coach Ravi Shastri said, "Our philosophy has been bhaad mein gaya pitch (to hell with the pitch). We
            //  need to take 20 wickets and it doesn\'t matter if it\'s Mumbai, Auckland, Melbourne, anywhere."', 
            //  'category': 'Sports', 
            //  'imgUrl': 'https://timesofindia.indiatimes.co
            // m/thumb/71700238.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'Why Apple has set its eyes on your eyes', 
            // 'brief': 'Apple is reportedly targeting 2020 for the l
            // aunch its AR headset. As per a Bloomberg report,  the Apple AR Glasses (name unconfirmed) are said to run in sync with the iPhone of the user — much like in the case
            // of Apple Watch Series. The AR Glasses from the iPhone-maker are then expected to display “texts, emails, maps, and games over the user’s field of vision."', 'category
            // ': '', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71702803.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': "Infosys starts probe into alleged 'unethical
            //  practices'; shares tank", 
            //  'brief': 'Infosys Ltd said on Tuesday it was investigating allegations of "unethical practices" by CEO Salil Parekh after receiving whistle
            // blower complaints last month, sending its shares into a tailspin. One of the complaints "largely deals with allegations relating to the CEO\'s international travel to
            //  the US and Mumbai," Infosys chairman Nandan Nilekani said in a statement.', 
            //  'category': 'Business', 
            //  'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71699375.cms
            // ?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'Mother of PMC Bank depositor dies of cardiac arrest', 
            // 'brief': 'Another family from Mulund Colony was bereaved by th
            // e PMC Bank scam on Sunday. Bharati Sadarangani (73), whose daughter and son-in-law hold vast deposits in the bank, passed away after a cardiac arrest in Solapur. She
            // was reportedly deeply anxious about her family’s future. Sadarangani died around 2pm on Sunday and the last rites were conducted in Solapur.', 
            // 'category': 'City', 'im
            // gUrl': 'https://timesofindia.indiatimes.com/thumb/71697016.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'MP: Tiger poacher who killed bears to eat their penis
            // nabbed', 
            // 'brief': 'Madhya Pradesh STF-wildlife has arrested one of the most wanted tiger poachers, Yarlen alias Luzalen alias Jasrat,, whose bizarre fetish for huntin
            // g bears to eat their penises had put him on the wanted list in several states. The 30-year-old was arrested after a six-year chase. Yarlen had jumped bail in 2014 and
            //  was pursued by police but fell off the radar. ', 
            //  'category': 'City', 
            //  'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71696036.cms?width=320&height=183&quality=1
            // 00'
            // },
            // {
            //     'heading': 'Govt employees of J&K, Ladakh to get salaries as per 7 pay commission', 
            // 'brief': 'The goverment employees of the new Union Territories - J&K, and L
            // adakh - will get salaries and other benefits as per the recommendations of the 7th Pay Commission from October 31, officials said. Home minister Amit Shah has approve
            // d the proposal of payment of all 7th CPC allowances to the government employees. ', 
            // 'category': 'India', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71701540
            // .cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': '3rd Test: India crush South Africa, complete 3-0 whitewash\n', 
            // 'brief': 'A formidable Indian team ticked all the
            //  boxes with ease as it completed a 3-0 rout of an out-of-sorts South Africa with an innings and 202 runs victory in the third and final Test on Tuesday. With another
            // 120 points in the ongoing World Test Championship, India now sit pretty on top of the table with 240 points.', 
            // 'category': 'Sports', 
            // 'imgUrl': 'https://timesofindia.i
            // ndiatimes.com/thumb/71698945.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': "Uber set to make Delhi Metro riders' life easy", 
            // 'brief': 'Ride-sharing app Uber has
            //  announced a new Public Transport feature in partnership with DMRC. The feature will help commuters plan their transit journey and get real-time information about Met
            // ro routes and times. It will be rolled out starting today (October 22) to Uber users across Delhi. Uber won a public bid to offer its mobility services. ', 'category'
            // : '', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71702976.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': '5-6% GDP growth is not terrible: JP Morgan ch
            // airman', 
            // 'brief': 'JP Morgan chairman and CEO Jamie Dimon on Monday said GDP growth numbers in China & India were “not terrible”. He said trade tensions had impacted
            // businesses & sentiments, taking a toll on global growth. Suggesting that policymakers needed to introspect over policy responses, he called for coordinated action bet
            // ween governments & central banks across the world. ', 
            // 'category': 'Business', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71696584.cms?width=320&height=183&q
            // uality=100'
            // },
            // {
            //     'heading': 'Banking services affected partially due to strike call by two unions', 
            // 'brief': 'Banking operations in some parts of the country were affec
            // ted on Tuesday as two employee-unions are observing a nation-wide strike. Some of the services like cash deposit and withdrawal at the counter and cheque clearances h
            // ave been impacted. The strike call has been given by AIBEA and BEFI to protest against bank mergers and fall in deposit rates.', 
            // 'category': 'Business', 
            // 'imgUrl': 'ht
            // tps://timesofindia.indiatimes.com/thumb/71703078.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': "US says support India's Article 370 move, but concerned over Kas
            // hmir", 
            // 'brief': "The Trump administration on Tuesday said while it supports India's development agenda behind the abrogation of Jammu and Kashmir's special status und
            // er Article 370, but it was concerned over the current situation in the Valley. It said it was closely monitoring the situation in the state following India's August 5
            //  decision.", 
            //  'category': 'India', 
            //  'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71697744.cms?width=320&height=183&quality=100'
            //     },
            // {
            //     'heading': "PV Sindhu support
            // s PM Modi's Bharat Ki Laxmi movement", 
            // 'brief': 'India\'s badminton star PV Sindhu on Tuesday supported PM Modi\'s Bharat Ki Laxmi movement, a campaign to honour daug
            // hters who have made a mark with their achievements in various fields. Modi, known for using social media to connect with the people, had said their work can be highli
            // ghted on social media platforms using the hashtag "BharatKiLaxmi".', 
            // 'category': 'Sports', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71698450.cms?width=320
            // &height=183&quality=100'
            // },
            // {
            //     'heading': 'Donald Trump to celebrate Diwali at White House on Thursday', 
            // 'brief': "US President Donald Trump will celebrate Diwali at the
            //  White House on Thursday, three days ahead of the formal celebrations of the festival of lights in India. This would be Trump's third Diwali celebrations at the White
            //  House, a tradition that began with his predecessor Barack Obama in 2009. Meanwhile, Diwali celebrations have already began in the US.", 
            //  'category': 'World', 'imgUrl'
            // : 'https://timesofindia.indiatimes.com/thumb/71698706.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'Government plans 1 national test for university admissions'
            // , 
            // 'brief': 'The New Education Policy is set to propose a single test of subject-specific aptitude for admission to colleges and universities across the country, said
            // HRD minister Ramesh Pokhriyal. NEP-2020 is likely to suggest an aptitude test and tests in specific subjects that can be taken multiple times in a year. ', 'category'
            // : 'India', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71696631.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'Till we work with honest intent, results
            //  will follow: Virat Kohli', 
            //  'brief': 'The intent has always been honest and that precisely is the reason for the stupendous results that the team is delivering, Virat
            //  Kohli said on Tuesday after a thumping 3-0 whitewash of South Africa. "As long as we keep working with honest intent, those things will follow. As long as we compete
            // , things will work out well for us," Kohli said.', 
            // 'category': 'Sports', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71701026.cms?width=320&height=183&qualit
            // y=100'
            // },
            // {
            //     'heading': "Canada's Trudeau to remain in power but with minority govt", 
            // 'brief': 'Canadian Prime Minister Justin Trudeau will remain in power but with a mi
            // nority government that will require the support of a smaller left-leaning party, official results showed on Monday after a hard-fought battle in which he was dogged b
            // y scandals. Minority governments in Canada rarely last more than 2-1/2 years.', 
            // 'category': 'World', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71698208.cms
            // ?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'Ahmedabad man locks up wife to meet girlfriend', 
            // 'brief': 'A 40-year-old woman from the Raipur area of Ahmedabad on
            // Monday alleged that her husband locked her up in their house so that he could meet his girlfriend. In her FIR, the woman, who has 2 daughters, stated that she married
            //  the accused 16 years ago according to the will of her family and she had been suffering harassment over frivolous issues ever since.', 
            //  'category': 'City', 
            //  'imgUrl':
            // 'https://timesofindia.indiatimes.com/thumb/71696065.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'Bring $500 million FDI, get relationship manager: Government'
            // , 
            // 'brief': 'Soon, those looking to invest $500 million or more in the country will have a designated person who will facilitate all clearances — from the Centre to lo
            // cal bodies — with officials from state government and central ministries too converging to address investor queries. While the issue has been discussed with Union min
            // ister Piyush Goyal, a formal approval is awaited', 
            // 'category': 'Business', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71696507.cms?width=320&height=183&qual
            // ity=100'
            // },
            // {
            //     'heading': 'Exit polls predict huge NDA wins in Maharashtra, Haryana', 
            // 'brief': 'BJP seems headed back to office with strong majorities in Maharashtra and
            //  Haryana. Several exit polls showed BJP close to a majority on its own, while Sena may also see a surge in numbers in Maharashtra. The exit polls suggest NCP may get
            // more seats than Congress. ', 
            // 'category': 'India', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71696465.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'T
            // N: Builder puts ‘Brahmins-only’ flats on sale, draws criticism', 
            // 'brief': 'An advertisement to sell newly constructed flats in an apartment to “brahmins only” has att
            // racted flak from the Tamil Nadu Untouchability Eradication Front which has demanded action against the builder. Om Shakthi Construction had announced that Sri Sakthi
            // Renga apartment at Lakshmi Nagar on Melur road in Trichy is up for grabs for brahmins only.', 
            // 'category': 'City', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb
            // /71696104.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'Pakistan firm on $20 Kartarpur fee but India agrees to pact', 
            // 'brief': 'Pakistan refused to budge on ch
            // arging Sikh pilgrims $20 to visit Kartarpur Sahib. India gave in to the demand and agreed to sign the Kartarpur Corridor agreement.  The Indian concession came even a
            // s Indian and Pakistani forces are ranged along the LoC in a heavy exchange of fire.', 
            // 'category': 'India', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/716967
            // 54.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'Bangladesh will come, they will sort out issue: Sourav Ganguly', 
            // 'brief': "The Bangladesh cricketers went on s
            // trike on Monday, saying that they wouldn't take part in any cricket activity until their demands are addressed by their board. While their strike does put a question
            // mark on their upcoming tour of India, BCCI president-elect Sourav Ganguly is confident that the players will sort the issue with the board and the series won't be aff
            // ected.", 
            // 'category': 'Sports', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71691368.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'PM Modi greets home
            // minister Amit Shah on his 55th birthday', 
            // 'brief': 'Prime Minister Narendra Modi on Tuesday extended birthday greetings to BJP president and home minister Amit Shah,
            // describing him as a hard working person who is playing an important role in keeping India secure. Born in then Bombay, Shah turned 55 on Tuesday.', 
            // 'category': 'India
            // ', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71699196.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'Infosys stock crashes 14% following allegations
            // of irregularities', 
            // 'brief': 'It’s back to 2017 for Infosys. A letter accusing the CEO of dressing up the company’s financials to show better revenue sent the company
            // ’s share price plummeting by 14% in morning trade on the New York Stock Exchange on Monday. The anonymous letter writers said they have complained to the company boar
            // d and to the US Securities & Exchange Commission. ', 
            // 'category': 'Business', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71698938.cms?width=320&height=183&qu
            // ality=100'
            // },
            // {
            //     'heading': 'Campus buzz is back at NIT Srinagar on first day for new batch', 
            // 'brief': 'Desolate for almost 3 months, the Hazratbal campus of NIT Srinaga
            // r came alive on Monday with more than half of the new batch of students showing up for their new semester, which also marked the resumption of classes. Although NIT S
            // rinagar formally reopened on October 15, it was only on Monday that the first classes were held since the August 5 lockdown. ', 
            // 'category': 'India', 
            // 'imgUrl': 'https:
            // //timesofindia.indiatimes.com/thumb/71694858.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': "Pak's decision to stop postal services against international norms:
            // Prasad", 
            // 'brief': 'India on Monday slammed Pakistan’s “unilateral” decision to stop postal communications between the two countries. The country said it violated esta
            // blished international norms.  Pakistan has not accepted any postal consignment from India after August 27. ', 
            // 'category': 'India', 
            // 'imgUrl': 'https://timesofindia.ind
            // iatimes.com/thumb/71696789.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'Walmart CEO Doug McMillon writes to PM Modi on data', 
            // 'brief': 'Walmart CEO Doug McMil
            // lon has reached out to PM Modi on matters of data privacy and localisation, sourcing commitments and issues concerning clearances for its retail business in India. Mc
            // Millon emphasised the need of a stable and open regulatory environment to enable Walmart and its group companies to source more from Indian farmers and small supplier
            // s.', 
            // 'category': 'Business', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71697244.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'Amit Shah roots for ov
            // erworked police, says will ease load', 
            // 'brief': 'Union minister Amit Shah said the low police-public ratio in the country was forcing 90% police personnel to work mor
            // e than 12 hours a day. He was speaking on the on the occasion of Police Commemoration Day.  ', 
            // 'category': 'India', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thu
            // mb/71696859.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'Court accepts CBI chargesheet against P Chidambaram', 
            // 'brief': ' A special court on Monday took cogni
            // sance of the CBI chargesheet filed against former Union finance minister and Congress leader P Chidambaram, his son Karti, and 12 others in the INX Media corruption c
            // ase.  P Chidambaram will be produced in court on October 24. ', 
            // 'category': 'India', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71696868.cms?width=320&heigh
            // t=183&quality=100'
            // },
            // {
            //     'heading': 'Don’t agree with his ideology, but Savarkar was a nationalist: Singhvi', 
            // 'brief': 'Congress leader Abhishek Singhvi on Monday praise
            // d Hindutva ideologue Vinayak Damodar Savarkar. Singhvi’s comments, though they came with the rider that he did not subscribe to Savarkar’s ideology, followed BJP’s Ma
            // harashtra unit proposing that Bharat Ratna be conferred on Savarkar.', 
            // 'category': 'India', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71696889.cms?width=32
            // 0&height=183&quality=100'
            // },
            // {
            //     'heading': 'This skin-like cover makes mobiles ticklish', 
            // 'brief': 'Scientists have developed an “artificial skin” that can be wrapped ar
            // ound devices such as smartphones and make them ticklish. The prototype, designed to look like and mimic human skin, responds to different forms of human contact such
            // as tickling, caressing & pinching. Called Skin-On interface, it can be attached to phones, wearable devices and laptop touchpads.', 
            // 'category': 'Science', 
            // 'imgUrl': '
            // https://timesofindia.indiatimes.com/thumb/71680310.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'BJP basks in exit poll results in Maha, opposition dismissive'
            // , 
            // 'brief': 'With most of the exit polls forecasting a two-thirds majority for the BJP-led NDA in Maharashtra, the ruling party on Monday said the figures were in line
            //  with its expectations, while the opposition trashed the numbers, saying the true picture will be "way better". The poll results will be out on October 24.', 'categor
            // y': 'India', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71693519.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': "India-US ties 'extremely strong': EAM
            // S Jaishankar\n", 
            // 'brief': 'Amid concerns over trade issues between India and the US, external affairs minister S Jaishankar expressed confidence that the two countrie
            // s have an "extremely strong" relationship and can overcome any obstacle. He said there will be issues with the US because it has made trade issues much more central t
            // o its foreign policy, but they can be worked out through dialogue.', 
            // 'category': 'India', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71691521.cms?width=320&
            // height=183&quality=100'
            // },
            // {
            //     'heading': 'Every person living in Bengal is citizen of India: Mamata Banerjee', 
            // 'brief': 'Iterating that she would never allow the impleme
            // ntation of NRC in West Bengal, CM Mamata Banerjee said every one living in this state is a citizen of India. "Those who have turned 18 should immediately enrol themse
            // lves in voters\' list. We will not allow any division among the people of the state. Be rest assured we are your custodians," she said.', 
            // 'category': 'India', 'imgUrl
            // ': 'https://timesofindia.indiatimes.com/thumb/71692687.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'US moves troops, tanks into Lithuania in message to Russia
            // ', 
            // 'brief': 'The United States on Monday began deploying a battalion of troops and dozens of tanks to Lithuania for an unprecedented six-month rotation, a move sought
            //  by the Baltic EU and NATO state to deter neighbouring Russia. The US deployment was a "manifestation of American commitment to continued deterrence along NATO\'s eas
            // tern flank," a US commander said.', 
            // 'category': 'World', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71693563.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'headi
            // ng': "VHP reciprocates Muslims' pro-peace gesture before Ayodhya verdict", 
            // 'brief': 'The VHP announced cancellation of all its programmes proposed after the Ayodhya l
            // and dispute ruling by the SC. "We have cancelled all our programmes and gatherings of Hindu workers," a VHP UP spokesperson said. Muslim parties to the title suit ear
            // lier had announced deferring construction of mosque at the disputed site in Ayodhya if the verdict goes in their favour.', 
            // 'category': 'India', 
            // 'imgUrl': 'https://tim
            // esofindia.indiatimes.com/thumb/71692681.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'Southeast Europe faces dramatic population drop, UN warns', 
            // 'brief': "Dra
            // matic falls in population in Southeast Europe as young people seek opportunities abroad are threatening the ability of countries in the region to maintain vital socia
            // l services, the UN warned. Nine of the world's ten fastest-shrinking nations are in East and Southeast Europe.", 
            // 'category': 'World', 
            // 'imgUrl': 'https://timesofindia.
            // indiatimes.com/thumb/71693038.cms?width=320&height=183&quality=100'
            // },
            // {
            //     'heading': 'UK speaker rules against govt trying to get another vote on Brexit', 
            // 'brief': 'Brit
            // ain\'s parliamentary speaker John Bercow told the government on Monday it could not again try to get a vote on Prime Minister Boris Johnson\'s Brexit deal because it
            // was posing the same question to parliament twice. "Today\'s circumstances are in substance the same as Saturday\'s circumstances," Bercow told parliament in his justi
            // fication for not allowing another vote.', 
            // 'category': 'World', 
            // 'imgUrl': 'https://timesofindia.indiatimes.com/thumb/71692160.cms?width=320&height=183&quality=100'
            // },
            // {
            // 'heading': '65.6% turnout in Haryana, 60.5% in Maharashtra', 
            // 'brief': 'Haryana recorded 65.57% voting on Monday, significantly down from its highest-ever turnout of 7
            // 6.13% in the 2014 state polls.\nMaharashtra registered a turnout  of 60.5% as compared to 63.08% in the last assembly elections. ', 
            // 'category': 'India', 
            // 'imgUrl': 'ht
            // tps://timesofindia.indiatimes.com/thumb/71696551.cms?width=320&height=183&quality=100'}
        ]   
        }
    }
    render() {
        return (
            <div style={{display:'flex',flexWrap:"wrap"}}>
                { 
                    this.state.news.map(item => {
                        return <Card content = {item} />
                    })
                }
            </div>
        )
    }
}
