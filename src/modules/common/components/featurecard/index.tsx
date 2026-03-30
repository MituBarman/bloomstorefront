
import * as Separator from "@radix-ui/react-separator"
import { JSX } from "react";

interface Featurecardpros {
    logo: JSX.Element;
    title: string;
    subtitle: string;
}

const Featurecard: React.FC<Featurecardpros> = ({ logo, title, subtitle }) => {
    return (
        <div className="flex flex-col items-center w-[350px] justify-center gap-8 px-8 py-5">
            {logo}
            <h2 className="text-2xl font-medium text-center">
                {title}
            </h2>
            <Separator.Root className="h-px w-full bg-gray-300" />
            <p className="text-lg text-gray-700 font-medium text-center break-words">
                {subtitle}
            </p>
        </div>
    );
};

export default Featurecard;