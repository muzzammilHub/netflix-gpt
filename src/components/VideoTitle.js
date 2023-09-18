import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PowerSettingsNewSharpIcon from '@mui/icons-material/PowerSettingsNewSharp';

const VideoTitle = ({title, overview}) => {
  return (
    <div className=' w-screen aspect-video pt-10 md:pt-[22rem] pl-4 md:pl-8 absolute bg-gradient-to-r from-black'>
        <p className=' text-xs md:text-4xl font-bold mb-5 text-white pt-14 '>{title}</p>
        <p className=' w-1/3 hidden md:block mb-4 text-white'>{overview}</p>
        <button className=' md:w-[7rem] pt-[0.1rem] pb-[0.1rem] mr-3  pr-3 text-xs md:text-lg bg-white rounded-md text-black hover:bg-opacity-50'> <PlayArrowIcon className=' mr-1'/>Play</button>
        <button className=' md:w-[8rem]  p-1 text-[0.8rem] md:text-lg pr-2 bg-slate-500 text-white  rounded-md bg-opacity-50 hover:bg-opacity-30'><PowerSettingsNewSharpIcon className='mr-1'/>More Info</button>
    </div>
  )
}

export default VideoTitle;