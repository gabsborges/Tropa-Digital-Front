import PlusIcon from "./PlusIcon";

export default function InsertButton() {
    return (
        <button className="flex flex-row items-center gap-[10px] border rounded-full px-[15px] py-[10px]  bg-primary transition-all duration-200 border-none cursor-pointer">
            <PlusIcon />
            <p className="text-white">Inserir novo </p>
          </button>
    )
}