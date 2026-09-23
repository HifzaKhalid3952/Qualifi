import React from 'react';

interface PathwayToGraduateDegreeProps {
  onOpenPathways: () => void;
  onOpenEnquiry: () => void;
}

export const PathwayToGraduateDegree: React.FC<PathwayToGraduateDegreeProps> = ({
  onOpenPathways,
  onOpenEnquiry,
}) => {
  return (
    <div className="w-full space-y-6">
      {/* Qualifi Quality Standards Heading from Screenshot */}
      <div>
        <h2 className="font-['Raleway',sans-serif] text-[22px] sm:text-[24px] font-[600] text-[#222222] tracking-tight mb-4">
          Qualifi Quality Standards
        </h2>
        <div className="space-y-4 font-['Raleway',sans-serif] text-[14px] sm:text-[14.5px] font-[400] text-[#222222] leading-[1.7]">
          <p>
            At the heart of Qualifi's commitment to the creation and awarding of respected
            qualifications is a rigorous focus on high standards and consistency, beginning
            with recognition as an Awarding Organisation (AO) by the qualification regulators
            for England (Ofqual), and as signatory to BIS international commitments of quality.
          </p>

          <p>
            Qualifications developed to fit the Regulated Qualifications Framework (RQF) provide an indication
            of the relative demand of different qualifications. Learners and employers receive a consistent and
            credible recognition of learning along with a structured career progression route promoting life-long
            learning, and are recognised worldwide as a standard for accomplishment.
          </p>

          <p>
            RQF qualification levels are based on the standard of knowledge, understanding and competence needed
            for industry groups.
          </p>
        </div>
      </div>

      {/* VOCATIONAL PATHWAYS Button - Exact Black Pill Button from Screenshot 2 */}
      <div>
        <button
          type="button"
          onClick={onOpenPathways}
          className="bg-black hover:bg-[#222222] text-white font-bold tracking-wider text-[12.5px] sm:text-[13px] uppercase px-7 py-3 rounded-full transition-colors cursor-pointer inline-flex items-center gap-2 select-none shadow-xs"
        >
          <span>VOCATIONAL PATHWAYS</span>
        </button>
      </div>

      {/* Heading: Your pathway to a graduate degree */}
      <div className="pt-2">
        <h3 className="text-[22px] sm:text-[24px] font-bold text-[#222222] tracking-tight mb-4">
          Your pathway to a graduate degree
        </h3>

        {/* Fanned-out Qualifi Brochures Image - Exact match to screenshot */}
        <div 
          onClick={onOpenPathways}
          className="cursor-pointer group relative overflow-hidden transition-transform duration-200 hover:opacity-95"
          title="Click to view Qualifi degree pathway brochures and university articulations"
        >
          <img
            src="/src/assets/images/hero_qualifi_brochures_1790160381839.jpg"
            alt="Qualifi Strategic Management and Leadership Level 7 Diploma brochures and qualification specifications"
            className="w-full max-w-[340px] h-auto object-cover rounded-xs"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Text from Screenshot 3 */}
        <p className="mt-5 text-[14px] sm:text-[14.5px] text-[#444444] leading-[1.6]">
          Our university progression agreements mean you can apply your Qualifi Level 4 and
          upwards diploma, towards a graduate or post graduate degree from the UK or the USA.
        </p>

        {/* UNIVERSITY PATHWAYS Button - Exact Black Pill Button from Screenshot 3 */}
        <div className="mt-5">
          <button
            type="button"
            onClick={onOpenPathways}
            className="bg-black hover:bg-[#222222] text-white font-bold tracking-wider text-[12.5px] sm:text-[13px] uppercase px-7 py-3 rounded-full transition-colors cursor-pointer inline-flex items-center gap-2 select-none shadow-xs"
          >
            <span>UNIVERSITY PATHWAYS</span>
          </button>
        </div>
      </div>
    </div>
  );
};

