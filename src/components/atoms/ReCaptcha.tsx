import Image from "next/image";
import Link from "next/link";

export default function ReCaptcha() {
  return (
    <div
      className={
        "w-[400px] h-20 px-2 bg-gray-200 flex flex-row mb-4 justify-between items-center border-2 border-fontGrey rounded-sm"
      }
    >
      <div className={"flex flex-row items-center"}>
        <input type="checkbox" className={"w-8 h-8 mr-2"} />
        <label> I am not a robot</label>
      </div>
      <div className={"w-20 flex flex-col"}>
        <Image
          src={"https://www.gstatic.com/recaptcha/api2/logo_48.png"}
          alt={"reCaptcha"}
          width={32}
          height={32}
        />
        <p className={"text-xs"}>reCAPTCHA</p>
        <div className={"w-full flex flex-row justify-between items-center"}>
          <Link
            href={"https://policies.google.com/privacy?hl=en"}
            className={"text-xs"}
          >
            Privacy
          </Link>
          <Link
            href={"https://policies.google.com/terms?hl=en"}
            className={"text-xs"}
          >
            Terms
          </Link>
        </div>
      </div>
    </div>
  );
}
