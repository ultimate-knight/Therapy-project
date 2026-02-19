"use client";
import { useState} from "react";
import { PlusIcon, MinusIcon, ArrowRightIcon, Menu, XIcon } from "lucide-react";

export default function Home() {
  const [changer, setchanger] = useState(null);
  const [truthy, settruthy] = useState(null);

  return (
    <div className="flex flex-col relative font-poppins scroll-smooth min-h-screen overflow-x-hidden  min-w-screen items-center justify-center bg-yellow-50 font-sans text-gray-800">
      {/* section-1 */}
      <div className="h-screen ">
        <p className="text-[clamp(1.25rem,2vw,2rem)]  order-2 font-semibold fixed top-0 left-6 p-5 max-[1025px]:left-auto  max-[1025px]:top-0 max-[1025px]:right-0">
          Dr. Maya Reynolds, PsyD
        </p>

        {truthy === 34 ? (
          <XIcon
            className="text-black fixed left-3 top-5 text-[34vw]"
            onClick={() => settruthy(null)}
          />
        ) : (
          <Menu
            onClick={() => settruthy(34)}
            className="text-black text-4xl fixed left-3 top-5 text-[34vw] min-[1025px]:hidden"
          />
        )}
        {truthy === 34 && (
          <>
            <div className="flex flex-col  items-center justify-center w-screen h-screen bg-yellow-50">
              <p>Blog</p>
              <p>Contact</p>
            </div>
          </>
        )}

        <div
          className={`flex  flex-row space-x-7 text-lg fixed right-0 top-0 p-5 max-[1025px]:hidden`}
        >
          <p className="hover:text-gray-400 transfrom-transition duration-700 cursor-pointer">
            Blog
          </p>
          <p className="hover:text-gray-400 transfrom-transition duration-700 cursor-pointer">
            Contact
          </p>
        </div>
        <div className="grid grid-cols-2 max-[770px]:grid max-[770px] max-[770px]:grid-cols-1 max-[770px]:h-1/11     max-[770px]:translate-y-[250%] h-screen w-full    justify-items-center place-items-center ">
          <img
            src="/flower.jpeg"
            className="rounded-t-full h-auto max-w-[37vw] w-full   min-[2000px]:max-w-[23vw]"
          />

          <div className="flex flex-col items-center justify-center   h-full  space-y-3 p-5 my-auto">
            <p className="text-[clamp(2rem,5vw,5rem)] font-medium ">
              Live your life
            </p>
            <p className="font-medium -mt-7 text-[clamp(2rem,5vw,5rem)]">
              in full bloom
            </p>
            <p className="text-center text-[clamp(1.25rem,1vw,1rem)] ">
              Therapy for Adults in Santa Monica.
            </p>
            <button className="flex hover:bg-green-950 mt-5 hover:text-white transition-all duration-700 flex-row space-x-1 items-center justify-center w-fit  border-1 border-black px-5 py-2">
              <p className="uppercase text-[clamp(1rem,1vw,1rem)] font-semibold cursor-pointer">
                Connect with me
              </p>
              <ArrowRightIcon className="h-3 w-3"></ArrowRightIcon>
            </button>
          </div>
        </div>
      </div>





      {/* section-2 */}
      <div className="grid relative grid-cols-2 max-[770px]:grid max-[770px]:grid-cols-1  justify-between min-w-screen h-full     bg-amber-100">
        <div className="flex flex-col items-center max-[770px]:order-2   justify-center    h-full  min-w-[47vw]   space-y-4  p-20">
          <div className="text-[clamp(1rem,1.5vw,1.25rem)] p-10 max-[370px]:min-w-[400px]  min-w-[430px]">
            <p className="text-[clamp(1.5rem,4vw,3rem)] font-semibold">
              Live a fullfilling life.
            </p>
            <div className="mt-5">
              <p>
                Life can feel overwhelming—especially when you’re balancing
                professional demands, personal relationships, and the pressure
                to keep everything together.
              </p>
            </div>
            <div className="mt-5">
              <p>
                It’s common to look “fine” on the outside while quietly
                struggling with anxiety, overthinking, or emotional exhaustion.
              </p>
            </div>
            <div className="mt-5">
              <p>
                <div className="mt-5">
                  <p>
                    You don’t have to face it alone. Therapy offers a supportive
                    space to slow down, reconnect, and move forward with more
                    clarity and ease.
                  </p>
                </div>
              </p>
            </div>
          </div>
          <button className="flex flex-row space-x-1  cursor-pointer hover:bg-green-950 hover:text-white transition-all duration-500 items-center justify-center absolute bottom-0 border-1 border-black h-7 min-w-screen p-7 text-center">
            <p className="">Get In Touch</p>
            <ArrowRightIcon className="h-3 w-3"></ArrowRightIcon>
          </button>
        </div>
        
        <img
          src="/coffee.jpeg"
          className=" z-20  h-full max-[770px]:order-1 w-full min-w-[47vw]"
        />
        
      </div>




      {/* section-3 */}
      <div className="flex flex-col space-x-5 space-y-4 z-20 justify-start items-center w-full min-h-full min-[2000px]:p-[500px] p-20 bg-gray-100">
        <p className="text-[clamp(1.5rem,4vw,3rem)]  font-semibold text-center">
          My specialities
        </p>
        <div className="grid grid-cols-3 gap-y-5 gap-x-8 max-[770px]:grid max-[770px]:place-items-center max-[770px]:justify-items-center   max-[770px]:grid-cols-1">
          <div className="flex relative flex-col space-y-4 p-5 min-[2000px]:space-y-30  justify-start  h-auto max-w-[55vw] w-full border-1 border-black max-[770px]:min-w-[90vw] ">
            <p className="font-semibold text-[clamp(1.25rem,1vw,1rem)]">
              Anxiety & Stress
            </p>
            <div className="text-[clamp(1rem,0.5vw,1.25rem)] min-w-40">
              <p>
                Persistent worry, racing thoughts, and physical tension can make
                everyday life feel exhausting. Together, we’ll work toward calm,
                clarity, and emotional balance.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/stressor.jpeg"
                className="rounded-full aspect-square max-[770px]:w-[46vw] max-w-[30vw] min-[2000px]:max-w-[15vw] w-full left-14   h-auto"
              />
            </div>
          </div>
          <div className="flex relative flex-col space-y-4 min-[2000px]:space-y-30 p-5  justify-start min-h-full max-w-[55vw] w-full border-1 border-black  max-[770px]:min-w-[90vw]">
            <p className="font-semibold text-[clamp(1.25rem,1vw,1rem)]">
              Trauma & Healing
            </p>
            <div className="text-[clamp(1rem,0.5vw,1.25rem)] min-w-30 ">
              <p>
                Past experiences can continue to shape how you feel, think, and
                relate to others. I provide a safe, paced approach to trauma
                work focused on stabilization and healing.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <img
                src="/sleeper.jpeg"
                className="rounded-full aspect-square max-[770px]:w-[46vw] max-w-[30vw] min-[2000px]:max-w-[15vw] w-full left-14   h-auto"
              />
            </div>
          </div>
          <div className="flex relative flex-col space-y-3  min-[2000px]:space-y-30 p-5  justify-start  min-h-full max-w-[55vw] w-full border-1 border-black max-[770px]:min-w-[90vw]">
            <p className="font-semibold text-[clamp(1.25rem,1vw,1rem)]">
              Burnout & Perfectionism
            </p>
            <div className="text-[clamp(1rem,0.5vw,1.25rem)] min-w-40">
              <p>
                High achievers often push through stress until they feel
                disconnected or depleted. Therapy can help you reconnect with
                yourself and create more sustainable ways of living and working.
              </p>
            </div>
            <div className="flex flex-col justify-center items-center">
              <img
                src="/women-sit.jpeg"
                className="rounded-full aspect-square max-[770px]:w-[46vw] max-w-[30vw] min-[2000px]:max-w-[15vw] w-full left-14   h-auto"
              />
            </div>
          </div>
        </div>
      </div>




      {/* section-4 */}
      <div className="grid grid-cols-2 z-20 max-[770px]:grid max-[770px]:grid-cols-1  bg-amber-100 h-1/5    w-full">
        <img src="/lecrec.jpeg" className="w-full h-full object-center z-30  object-cover" />
        <div className="h-full  flex-1 p-15 transition-all duration-1000 min-[3200px]:whitespace-nowrap max-[770px]:items-center max-[770px]:p-10   relative bg-gray-400 flex flex-col  min-[3200px]:space-y-90 items-start justify-center">
          
          <div className="max-[770px]:-ml-5 max-[770px]:p-5 min-w-60">
            <div className="min-[3200px]:mt-90 max-[770px]: space-y-10">
              <p className="text-[clamp(1.5rem,3vw,3rem)]  font-medium  text-left text-gray-900  ml-1 ">
                You don't have to do this alone.
              </p>
              <p className="w-full text-[clamp(1rem,1.5vw,1.25rem)]">
                If you are facing any of these, there’s hope:
              </p>
            </div>
            <div className="text-[clamp(1rem,1.5vw,1.25rem)]">
              <ul className="flex flex-col max-[770px]:mt-15 text-[clamp(1rem,1.5vw,1.25rem)] list-disc text-left w-full mt-8 ml-13 space-y-4">
                <li>Persistent feelings of anxiety or overwhelm</li>
                <li>Trouble focusing or making decisions</li>
                <li>Difficulty sleeping or feeling emotionally regulated</li>
                <li>Feeling constantly exhausted or emotionally “on edge”</li>
                <li>
                  A sense of being stuck despite functioning well outwardly
                </li>
              </ul>

              
            </div>
            <div className="text-left   w-full text-[clamp(1rem,1.5vw,1.25rem)]  mt-10">
              <p className="">
                With empathy and guidance, we’ll work together to understand
                what’s beneath these experiences and help you feel more grounded
                in daily life.
              </p>
              
            </div>
          </div>
          <div className="flex flex-col justify-end items-center h-full mt-20 w-full">
            <button className="flex flex-row space-x-1 absolute bottom-0 my-auto cursor-pointer hover:bg-green-950 hover:text-white transition-all duration-500 items-center justify-center   border-1 border-black h-20   min-w-screen text-center">
              <p>work with me</p>
              <ArrowRightIcon className="h-3 w-3"></ArrowRightIcon>
            </button>
          </div>
        </div>
      </div>





      {/* section-5 */}
      <div className="grid grid-cols-2 z-20 place-items-center justify-items-center gap-x-20    max-[960px]:gap-y-7 max-[960px]:grid max-[960px]:grid-cols-1 w-full p-30  max-[960px]:p-20  max-[960px]:min-h-[10vh] bg-gray-200">
        <div className="flex flex-col space-y-5  max-[960px]:order-2 min-w-[450px] items-center p-10 max-[770px]:min-w-95 max-[770px]:items-center justify-center h-full">
          <div className="text-[clamp(1rem,1.5vw,1.5rem)] space-y-4">
            <p className="text-[clamp(1.5rem,4vw,4rem)] w-full">
              Hi, I’m Dr. Maya Reynolds
            </p>
            <p>
              I’m a licensed clinical psychologist offering therapy for adults
              navigating anxiety, trauma, burnout, and high internal pressure.
            </p>
            <p>
              My approach is warm, collaborative, and grounded. I integrate
              evidence-based practices like cognitive-behavioral therapy (CBT),
              EMDR, mindfulness, and body-oriented techniques to support both
              emotional insight and nervous system regulation.
            </p>
            <p>
              Whether you’re feeling overwhelmed, disconnected, or simply ready
              for change, therapy can become a space where you feel understood,
              respected, and actively involved in your own growth.
            </p>
            <button className="border-1 flex flex-row space-x-2 translate-y-10   border-black px-7 py-2 uppercase hover:bg-green-950 hover:text-white transition-all duration-700 cursor-pointer">
              <p>Let's chat</p>
              <ArrowRightIcon className="h-4 w-4 mt-2"></ArrowRightIcon>
            </button>
          </div>
        </div>
        <div className="relative max-[960px]:translate-x-[30%] max-[960px]:-translate-y-[5%]  max-[960px]:pt-0  max-[960px]:order-1 w-full h-full">
          <img
            src="/Reynolds.png"
            className="rounded-t-full max-w-[80%] w-full max-[960px]:max-w-[40%] max-[500px]:max-w-[50%]  h-auto min-[2000px]:max-w-1/6   "
          />
          
        </div>
      </div>


      {/* section-6 */}
      <div className="min-w-screen z-20 flex flex-col items-center  h-full min-h-[35vh] bg-amber-50 p-10">
        <div className="flex flex-col  items-start justify-start mt-10">
          <h2 className="font-medium text-#1F3A5F text-[clamp(2rem,4vw,5rem)] text-left">
            OUR OFFICE
          </h2>
          <div className="text-#2F2F2F w-full text-[clamp(1rem,1.5vw,1.5rem)] text-left">
            <p>
              Located in the heart of Santa Monica, my office is a quiet,
              thoughtfully designed space
            </p>
            <p>
              created to feel grounding,private, and uncluttered from the moment
              you arrive.
            </p>
          </div>
          <div className="grid grid-cols-2 max-[940px]:grid max-[940px]:grid-cols-1 gap-y-14 gap-x-14 w-full justify-items-center mt-20">
            <div className="flex flex-col justify-center text-[clamp(1rem,1.5vw,1.5rem)]">
              <h1 className="text-[clamp(2rem,4vw,4rem)]">
                A Space Designed for Healing
              </h1>
              <p>
                Many of the adults I work with come in feeling mentally
                overloaded, tense, or emotionally on edge. The physical
                environment plays an important role in the healing process.
              </p>
              <p className="mt-4">
                With natural light, soft tones, and a calm atmosphere, the space
                itself supports regulation and steadiness — not just during our
                conversation, but throughout your time here.
              </p>
            </div>
            <img
              src="/office1.jpeg"
              className="w-full h-auto max-[940px]:min-w-full max-w-[45vw]"
            />

            <img
              src="/office2.jpeg"
              className="w-full h-auto max-w-[45vw] max-[940px]:min-w-full max-[940px]:order-2"
            />

            <div className="flex flex-col justify-center w-full text-[1rem] max-[940px]:order-1">
              <div className="text-[clamp(1rem,1.5vw,1.5rem)] leading-relaxed max-w-[900px]">
                <h1 className="text-[clamp(2rem,4vw,4rem)]">
                  How We Work Together
                </h1>
                <p>
                  Sessions are structured and collaborative, while still leaving
                  room for depth and reflection.</p> 
                  
                  <p className="mt-4">Whether we’re working through
                  anxiety, trauma, or professional burnout, the office provides
                  a consistent and supportive setting where meaningful
                  therapeutic work can unfold.
                </p>

                <p className="mt-4">
                  In addition to in-person therapy in Santa Monica, I also offer
                  secure telehealth sessions for clients located throughout
                  California.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>




      {/* section 7 */}
      <div className="flex flex-row z-20   max-[770px]:flex max-[770px]:flex-col max-[770px]:space-y-10 max-[770px]:items-center  space-x-20 w-full h-full  bg-gray-50 p-10">
        <img
          src="/bouquer.jpeg"
          className="rounded-t-full     ml-[30px] max-w-1/3 w-full  h-auto min-[2000px]:max-w-1/8   mt-10"
        />
        <div className="flex flex-col justify-center max-[770px]:min-w-full min-w-95 p-5">
          <p className="text-[clamp(1.5rem,4vw,3rem)] font-bold ">FAQs</p>
          <div className="space-y-4 mt-15">
            <div className="w-full bg-gray-800 h-[0.3vh]"></div>
            <div
              className={`flex relative justify-start items-center    space-x-3 transition-all duration-700 ${changer === 1 ? "min-h-[20rem] space-y-10" : ""}`}
            >
              {changer === 1 ? (
                <MinusIcon
                  onClick={() => setchanger(null)}
                  className="w-9 h-9  cursor-pointer transition-all duration-700"
                ></MinusIcon>
              ) : (
                <PlusIcon
                  onClick={() => setchanger(1)}
                  className="w-9 h-9 transition-transform duration-500 cursor-pointer" 
                ></PlusIcon>
              )}
              <p
                className="text-[clamp(1.5rem,3vw,3rem)]"
                onClick={() => setchanger(1)}
              >
                Do u take insurances?
              </p>
              {changer === 1 ? (
                <p className="absolute bottom-10 left-2   text-lg">
                  Please contact me directly to discuss insurance options and
                  out-of-network reimbursement.
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="w-full bg-gray-800 h-[0.3vh]"></div>
            <div
              className={`flex flex-row  justify-start items-center relative space-x-3 ${changer === 2 ? "min-h-[20rem] space-y-10 max-[370px]:h-[21rem]" : ""}`}
            >
              {changer === 2 ? (
                <MinusIcon
                  onClick={() => setchanger(null)}
                  className="max-w-9 w-full h-auto cursor-pointer transition-all duration-700"
                ></MinusIcon>
              ) : (
                <PlusIcon
                  onClick={() => setchanger(2)}
                  className="max-w-9 w-full h-auto cursor-pointer transition-all duration-700"
                ></PlusIcon>
              )}
              <p
                className="text-[clamp(1.5rem,3vw,3rem)]"
                onClick={() => setchanger(2)}
              >
                What are your rates.?
              </p>
              {changer === 2 ? (
                <p className="absolute bottom-10 left-2  text-lg">
                  Rates vary depending on session type. Reach out for current
                  fee information.
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="w-full bg-gray-800 h-[0.3vh]"></div>
            <div
              className={`flex flex-row  relative justify-start items-center space-x-3 ${changer === 3 ? "min-h-[20rem] space-y-10 max-[370px]:min-h-[21rem]" : ""}`}
            >
              {changer === 3 ? (
                <MinusIcon
                  onClick={() => setchanger(null)}
                  className="max-w-9 w-full h-auto cursor-pointer transition-all duration-700"
                ></MinusIcon>
              ) : (
                <PlusIcon
                  onClick={() => setchanger(3)}
                  className="max-w-9 w-full  h-auto cursor-pointer transition-all duration-700"
                ></PlusIcon>
              )}
              <p
                className="text-[clamp(1.5rem,3vw,3rem)] w-[80vw]"
                onClick={() => setchanger(3)}
              >
                Do you have any openings.?
              </p>
              {changer === 3 ? (
                <p className="absolute bottom-10 left-2   max-[770px]:ml-0 text-lg">
                 Availability changes regularly. Please contact me to inquire about current openings.
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="w-full bg-gray-800 h-[0.3vh]"></div>
          </div>
        </div>
      </div>


      {/* section-8 */}
      <div className="flex flex-col z-20 items-center justify-center bg-gray-200  w-full h-full p-50 max-[770px]:p-10 min-w-screen">
        <p className="text-4xl  text-center min-w-100 p-10">
          My Professional Background
        </p>
        <div className="mt-10 space-y-5 min-w-full  p-5">
          <div className=" w-full bg-gray-800 h-[0.3vh]"></div>
          <div
            className={`flex relative flex-row justify-between ${changer === 4 ? "h-[10rem]" : ""}`}
          >
            <p className="text-[clamp(1.5rem,1vw,2rem)]">Education</p>
            {changer === 4 ? (
              <MinusIcon
                onClick={() => setchanger(null)}
                className="w-7 h-7 cursor-pointer transition-all duration-700"
              ></MinusIcon>
            ) : (
              <PlusIcon
                onClick={() => setchanger(4)}
                className="w-7 h-7 cursor-pointer transition-all duration-700"
              ></PlusIcon>
            )}
            {changer === 4 ? (
              <p className="mt-10 absolute bottom-10 left-2    max-[770px]:ml-0 text-lg">
                Doctor of Psychology (PsyD) – Clinical Psychology
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="w-full bg-gray-800 h-[0.3vh]"></div>
          <div
            className={`flex relative flex-row space-x-1 justify-between ${changer === 5 ? "h-[10rem]" : ""}`}
          >
            <p className="text-[clamp(1.5rem,1vw,2rem)]">Licensure</p>
            {changer === 5 ? (
              <MinusIcon
                onClick={() => setchanger(null)}
                className="w-7 h-7 cursor-pointer transition-all duration-700"
              ></MinusIcon>
            ) : (
              <PlusIcon
                onClick={() => setchanger(5)}
                className="w-7 h-7 cursor-pointer transition-all duration-700"
              ></PlusIcon>
            )}
            {changer === 5 ? (
              <p
                className={`absolute bottom-10 left-2    max-[770px]:ml-0 text-lg`}
              >
                Licensed Clinical Psychologist – California
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="w-full bg-gray-800 h-[0.3vh] justify-between"></div>
          <div
            className={`flex relative flex-row space-x-1 justify-between ${changer === 6 ? "h-[10rem] max-[362px]:h-[12rem]" : ""}`}
          >
            <p className="text-[clamp(1.5rem,1vw,2rem)]">Certifications</p>
            {changer === 6 ? (
              <MinusIcon
                onClick={() => setchanger(null)}
                className="w-7 h-7 cursor-pointer transition-all duration-700"
              ></MinusIcon>
            ) : (
              <PlusIcon
                onClick={() => setchanger(6)}
                className="w-7 h-7 cursor-pointer transition-all duration-700"
              ></PlusIcon>
            )}
            {changer === 6 ? (
              <p
                className={`absolute bottom-10 max-[483px]:bottom-7 left-2    max-[770px]:ml-0 text-lg`}
              >
                CBT, EMDR, Mindfulness-Based and Trauma-Informed Therapeutic
                Approaches.
              </p>
            ) : (
              ""
            )}
          </div>
          <div className="w-full bg-gray-800 h-[0.3vh]"></div>
        </div>
      </div>


      {/* section-9 */}

      <div className="flex flex-col z-20  text-white items-center justify-center space-y-6 bg-[#7D7B46] text-center  min-h-[90vh] p-20 max-[770px]:p-20  min-w-screen">
        <p className="text-3xl font-semibold">Get started today.</p>
        <div className="text-center text-lg space-y-3 min-w-[80vw] ">
          <p>
            Ready to take the first step toward feeling more grounded and
            connected? I offer in-person therapy from my private office in Santa
            Monica as well as secure telehealth sessions for clients across
            California.
          </p>
          <p>
            Contact me to schedule your first session. I look forward to
            supporting you on your therapeutic journey.
          </p>
        </div>
        <button className="px-5 py-2 mt-10 border-1 cursor-pointer hover:bg-gray-50 hover:text-[#7D7B46] duration-700 transition-all border-white text-md">
          GET IN TOUCH
        </button>
      </div>



      {/* section-10 */}
      <div className="flex z-20 flex-row max-[770px]:flex max-[770px]:flex-col max-[770px]:space-y-3 justify-between h-full p-50 min-w-screen bg-amber-50">
        <div className="flex flex-col space-y-5 justify-start mt-3 p-10">
          <p className="text-4xl font-semibold">Contact</p>
          <div className="text-lg">
            <p>Dr. Maya Reynolds, PsyD</p>
            <p>Licensed Clinical Psychologist</p>
          </div>
          <div className="text-lg">
            <p>123th Street 45 W</p>
            <p>Santa Monica, CA 90401</p>
          </div>
          <div className="text-lg underline">
            <p>email@example.com</p>
            <p>(555) 555-5555</p>
          </div>
        </div>
        <div className="flex flex-row max-[770px]:flex max-[770px]:flex-col max-[770px]:space-y-3 space-x-14">
          <div className="flex flex-col space-y-3 justify-start mt-3 p-10">
            <p className="text-4xl font-semibold">Hours</p>
            <div className="text-lg mt-5">
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
          </div>
          <div className="flex flex-col space-y-3 justify-start mt-3 p-10">
            <p className="text-4xl font-semibold">Find</p>
            <div className="text-lg underline mt-5">
              <p>Home</p>
              <p>Contact</p>
              <p>Blog</p>
            </div>
          </div>
        </div>
      </div>


      {/* section-11 */}
      <div className="min-h-[40vh] z-20  relative flex flex-col items-center justify-center space-y-3 min-w-screen bg-gray-200">
        <div className="flex flex-row max-[770px]: max-[770px]:flex max-[770px]:flex-col max-[770px]:space-y-3 space-x-3 underline">
          <p>Privacy & Cookies Policy </p>
          <p> Good Faith Estimate</p>
          <p>Website Terms & Conditions</p>
          <p> Disclaimer</p>
        </div>
        <p className="absolute bottom-1 p-1 text-center">
          All Rights Reserved © 2024 Dr. Maya Reynolds, PsyD, LLC.
        </p>
      </div>
    </div>
  );
}
