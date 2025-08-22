export interface Props {}

const HeroSection:React.FC<Props> = ({}) => {
  return <div className="flex relative flex-col h-[470px] xl:h-screen p-6 xl:px-[132px] xl:pt-11 shadow-custom">
     <video
        autoPlay
        loop
        muted
        className="absolute top-1/2 left-1/2  w-full h-full max-w-none transform -translate-x-1/2 -translate-y-1/2 object-cover -z-10 border-b-2 border-b-white"
      >
        <source src="/bgVideo.mp4" type="video/mp4" />
      </video>
      <p className="mt-14 xl:mt-[100px] text-white text-3xl xl:text-7xl font-bold">
        The whole world <p>awaits.</p>
      </p>
  </div>
}

export default HeroSection