import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from "@radix-ui/react-dialog";

export function CreateAdBanner(){
  return (
    <div className="pt-2 bg-nlwgradient self-stretch rounded-lg overflow-hidden m-8">
        <div className="bg-[#2A2634] px-8 py-4 flex justify-between items-center">
          <div>
            <strong className="text-2xl text-white font-black block">
              Não encontrou seu duo?
            </strong>
            <span className="text-zinc-400 block mt-2 font-light">
              Publique um anúncio para encontrar novos players!
            </span>
          </div>
          <Dialog.Trigger className="py-3 px-4 bg-violet-500 hover:bg-violet-700 text-white rounded-md flex items-center gap-3">
            <MagnifyingGlassPlus size={24}  />
            Publicar anúncio
          </Dialog.Trigger>
        </div>
      </div>
  )
}