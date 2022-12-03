// import components
import Header from "./components/Header"
import Bookmark from "./components/Bookmark"

// import assets 
import Cover from "./assets/images/image-hero-desktop.jpg"
import CoverMobile from "./assets/images/image-hero-mobile.jpg"
import Profile from "./assets/images/logo-mastercraft.svg"

function App() {

  const projects = [
    {
      profile: Profile,
      name: 'Mastercraft Bamboo Monitor Riser',
      slogan: 'A beautiful & handcrafted monitor stand to reduce neck and eye strain.',
      backed: '89,914',
      backers: '5,007',
      daysLeft: '56',
      about: "The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height.Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work, helping you stay focused on the task at hand. Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stored under the stand.",
      Rewards: [
        {
          name: 'Bamboo Stand',
          pledge: 25,
          details: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
          left: 101,
        },
        {
          name: 'Black Edition Stand',
          pledge: 75,
          details: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
          left: 64,
        },
        {
          name: 'Mahogany Special Edition',
          pledge: 200,
          details: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
          left: 0,
        }
      ]
    }
  ]

  return (
    <div>
      {/* <img className=" absolute inset-0 opacity-10" src={Example} alt="" /> */}
      <Header />
      <div className="flex flex-col md:-space-y-[90px] -space-y-16">
        {/* portada */}
        <div>
          <img className="md:flex hidden w-full" src={Cover} alt="" />
          <img className="flex md:hidden w-full" src={CoverMobile} alt="" />
        </div>

        {/* Main */}
        <div className="flex items-center flex-col px-8 font-commissioner">
          <div className="md:w-[730px] w-full">
            {projects.map((item, index) => {
              return (
                <div key={index} className="flex flex-col gap-y-[22px]">
                  <Card>
                    {/* profile */}
                    <img className=" absolute -top-[28px] left-[50%] -translate-x-[50%]" src={Profile} alt="profile" />
                    <div className="flex items-center justify-center text-center flex-col">
                      <h1 className=" text-[1.75rem] font-bold leading-8 mt-2">{item.name}</h1>
                      <p className="pt-4 text-gray-400">{item.slogan}</p>

                      {/* back this and bookmark */}
                      <div className="flex items-center justify-between mt-[35px] w-full">
                        <button className="btn">Back this project</button>
                        <Bookmark />

                      </div>
                    </div>
                  </Card>
                  <Card>
                    <div className=" flex flex-col md:flex-row w-full items-center text-center md:text-start">
                      <div className="flex flex-col -space-y-4">
                        <h3 className=" font-bold text-[2rem]">${item.backed}</h3>
                        <p className="pt-4 text-gray-400 text-[0.94rem]">of $100,000 backed</p>
                      </div>
                      <div className=" h-[1px] w-[65px] md:h-[65px] md:w-[1px]  bg-gray-200 md:mx-[41px] md:mr-[48px] my-6 md:my-0"></div>
                      <div className="flex flex-col -space-y-4">
                        <h3 className=" font-bold text-[2rem]">{item.backers}</h3>
                        <p className="pt-4 text-gray-400 text-[0.94rem]">total backeds</p>
                      </div>
                      <div className=" h-[1px] w-[65px] md:h-[65px] md:w-[1px]  bg-gray-200 md:mx-[41px] md:ml-[96px] md:mr-[48px] my-6 md:my-0"></div>
                      <div className="flex flex-col -space-y-4">
                        <h3 className=" font-bold text-[2rem]">{item.daysLeft}</h3>
                        <p className="pt-4 text-gray-400 text-[0.94rem]">days left</p>
                      </div>
                    </div>
                    {/* bar */}
                    <div className=" mt-8 h-[12px] w-full rounded-full relative bg-gray-200">
                      <div style={{ width: `${item.backed.slice(0, 2)}%` }} className=" absolute top-0 bottom-0 left-0 bg-moderate-cyan rounded-full "></div>
                    </div>
                  </Card>
                  <Card>
                    <h4 className=" font-bold text-[1.25rem]">About this project</h4>
                    <p className="pt-4 text-gray-400 text-[0.94rem] mt-4 leading-8">{item.about}</p>

                    <Rewards data={item.Rewards} />
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

function Card({ children }) {
  return (
    <div className=" bg-white border rounded-lg p-12  relative">
      {children}
    </div>
  )
}

function CardSmall({ children }) {
  return (
    <div className=" bg-white border rounded-lg p-8 py-[32.5px]  relative">
      {children}
    </div>
  )
}

function Rewards({ data }) {
  return (

    <div className="flex flex-col gap-y-[22px] mt-14">
      {data.map((item, index) => {
        const { name, pledge, details, left } = item
        return (

          <div className={`${left === 0 && 'opacity-50'}`}>
            <CardSmall>
              <div className="flex justify-between">
                <h5 className=" font-bold text-[1.15rem]">{name}</h5>
                <span className=" text-moderate-cyan font-medium text-[0.9rem]">Pledge %{pledge} or more</span>
              </div>
              <p className="my-7 text-gray-400">{details}</p>
              <div className="flex justify-between pt-1">
                <p className="flex items-center gap-x-2 text-gray-400"> <span className=" text-black font-extrabold text-3xl">{left}</span> left</p>
                <button className={`${left === 0 && 'bg-gray-400 hover:bg-gray-400 cursor-default'} btn-small`}>{left === 0 ? 'Out of stock' : 'Select Reward'}</button>
              </div>
            </CardSmall>
          </div>
        )
      })}
    </div>
  )
}

