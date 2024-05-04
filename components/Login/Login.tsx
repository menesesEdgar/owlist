import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { Input } from "../ui/input";
import Background from "@/public/loginbackground.svg";
import Logo from "@/public/LoginLogo.svg";
import Image from "next/image";
const Login = () => {
  return (
    <div className="h-[100vh] w-full bg-secondary-foreground flex items-center justify-center">
      <Image
        src={Background}
        alt="Background"
        className="absolute w-full bottom-[-20px] -z-[1px]"
      />
      <div className="w-[500px] flex flex-col justify-between gap-2 bg-secondary/70 rounded-xl items-center relative">
        <div className="p-12 w-full text-center text-white">
          <Image src={Logo} alt="Logo" className="absolute -top-9 left-[30%]" />
          <p className=" text-sm ">
            No te preocupes, ya nos hicimos cargo del resto
          </p>
          <b className=" text-md">
            Ahora <span className="text-primary ">!Has lo tuyo¡</span>
          </b>
          <div className="text-left">
            <h4 className="text-lg font-bold">Identificate</h4>
            <p className="text-[11px] mb-2">
              Ingresa tus credenciales para poder acceder a la plataforma.
            </p>
            <form action="POST" className="flex flex-col gap-3">
              <Input
                placeholder="Correo electrónico"
                className="bg-primary-foreground"
              />
              <Input
                placeholder="Contraseña"
                className="bg-primary-foreground"
              />
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Mantener la sesión iniciada
                </label>
              </div>
              <Button type="submit" variant="default" className="w-1/2 ml-auto">
                Iniciar sesión
              </Button>
              <Separator className="my-4" />
              <div>
                <b className="text-md">¿Aún no tienes una cuenta?</b>
                <p className="text-[11px]">
                  Has click en el siguiente botón para conseguir una cuenta
                  completamente gratis ahora mismo
                </p>
              </div>
              <Button
                variant="ghost"
                className="border-2 w-1/2 mx-auto hover:bg-primary"
              >
                Registrarme
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
