import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
      <>
        <div>
          <Image
            src="https://images.pexels.com/photos/31513490/pexels-photo-31513490/free-photo-of-red-uber-taxi-on-busy-urban-street.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            width={900}
            height={1000}
            className=" object-contain h-full w-full "
          />
          <div className="absolute top-20 right-10">
            <SignUp />
          </div>
        </div>
      </>
    )
}
