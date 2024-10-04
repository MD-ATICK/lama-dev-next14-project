import Link from "next/link";

export default function Footer() {
  return (
    <div className=" h-20 border-t border-gray-800 mt-3 flex-col justify-center md:flex-row text-sm container mx-auto flex text-gray-500 font-medium items-center md:justify-between">
        <Link href={'https://www.facebook.com/mdatick866'} className=" cursor-pointer">Mohammad Atick.</Link>
        <p>copyrights for 2024 in bangladesh</p>
    </div>
  )
}
