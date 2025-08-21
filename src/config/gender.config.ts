import React from "react";
import type { LucideProps } from "lucide-react";
import type { UserGender } from "../types/user.types";
import { Mars, Venus } from "lucide-react";

export type GenderConfig = {
    class:string;
    label: string;
    icon: React.ComponentType<LucideProps>
}

export const genderConfig: Record<UserGender, GenderConfig> = {
    male: {
        class:"bg-blue-50 text-blue-700 ring-blue-600/20",
        label: "Male",
        icon: Mars
    },
    female: {
        class:"bg-pink-50 text-pink-700 ring-pink-600/20",
        label: "Female",
        icon: Venus,

    }

}