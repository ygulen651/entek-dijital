"use client";

import React from "react";
import Image from "next/image";
import type { TeamMember } from "@/lib/types";

const TeamSection = ({ members }: { members: TeamMember[] }) => {
  if (members.length === 0) return null;

  return (
    <section className="bg-[#f4f5f5] py-20 pb-32">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">

          <div className="space-y-4">
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-black" />
                <span className="text-sm font-sans font-medium text-black tracking-wide">Ekip Üyelerimiz</span>
             </div>
             <h2 className="text-5xl lg:text-6xl font-heading font-medium text-black tracking-tight">
               Profesyonellerimizle Tanışın
             </h2>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div key={member.id} className="group">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-black/5 mb-5">
                {member.photo && (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                )}
              </div>
              <h3 className="text-xl font-heading font-bold text-black">{member.name}</h3>
              <p className="text-sm text-black/50 font-sans">{member.role}</p>
              <div className="flex gap-4 mt-3">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-primary-neon">
                    Linkedin
                  </a>
                )}
                {member.instagram && (
                  <a href={member.instagram} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest text-black/40 hover:text-primary-neon">
                    Instagram
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
