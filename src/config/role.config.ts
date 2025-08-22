import React from "react";
import type { UserRole } from "../types/user.types";
import type { LucideProps } from "lucide-react";
import { Megaphone, User, Shield } from "lucide-react";


export type RoleConfig = {
    class: string;
    label: string;
    icon: React.ComponentType<LucideProps>
}

export const roleConfig: Record<UserRole, RoleConfig> = {
    member: {
        class: "bg-blue-100 text-blue-800 border-blue-200",
        label: "Member",
        icon: User
    },
    admin: {
        class: "bg-purple-100 text-purple-800 border-purple-200",
        label: "Admin",
        icon: Shield,
    },
    coach: {
        class: "bg-red-100 text-red-800 border-red-200",
        label: "Coach",
        icon: Megaphone
    }

}