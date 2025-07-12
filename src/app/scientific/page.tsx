import { Metadata } from "next";
import {
  Microscope,
  BookOpen,
  Award,
  Users,
  FileText,
  Clock,
  Calendar,
  ChevronRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Scientific Program",
  description:
    "Explore the comprehensive scientific program of the 74th Indian Pharmaceutical Congress 2025 featuring cutting-edge research presentations, workshops, and symposiums.",
};

const scientificTracks = [
  {
    title: "AI in Drug Discovery",
    description:
      "Machine learning applications in pharmaceutical research and development",
    sessions: 8,
    speakers: 12,
    topics: [
      "Machine Learning in QSAR",
      "AI-driven Target Identification",
      "Virtual Screening",
      "Drug-Drug Interaction Prediction",
    ],
  },
  {
    title: "Digital Health & Telemedicine",
    description:
      "Technology-enabled healthcare delivery and patient management systems",
    sessions: 6,
    speakers: 10,
    topics: [
      "Remote Patient Monitoring",
      "Digital Therapeutics",
      "mHealth Applications",
      "Healthcare Analytics",
    ],
  },
  {
    title: "Pharmaceutical Manufacturing 4.0",
    description:
      "Smart manufacturing, automation, and quality control in pharmaceutical production",
    sessions: 7,
    speakers: 11,
    topics: [
      "Process Analytical Technology",
      "Continuous Manufacturing",
      "IoT in Pharma",
      "Quality by Design",
    ],
  },
  {
    title: "Regulatory Technology",
    description:
      "Digital solutions for regulatory compliance and submission processes",
    sessions: 5,
    speakers: 8,
    topics: [
      "Electronic Submissions",
      "Regulatory AI",
      "Compliance Analytics",
      "Digital Auditing",
    ],
  },
  {
    title: "Precision Medicine",
    description:
      "Personalized treatment approaches using genomics and biomarkers",
    sessions: 6,
    speakers: 9,
    topics: [
      "Pharmacogenomics",
      "Biomarker Discovery",
      "Companion Diagnostics",
      "Personalized Dosing",
    ],
  },
  {
    title: "Blockchain in Pharma",
    description:
      "Distributed ledger technology for supply chain and data integrity",
    sessions: 4,
    speakers: 6,
    topics: [
      "Supply Chain Transparency",
      "Clinical Trial Data",
      "Drug Authenticity",
      "Smart Contracts",
    ],
  },
];

const sessionTypes = [
  {
    type: "Plenary Lectures",
    count: 4,
    duration: "45 minutes",
    description: "Keynote presentations by world-renowned experts",
    icon: Award,
  },
  {
    type: "Symposiums",
    count: 12,
    duration: "90 minutes",
    description: "Focused discussions on specific therapeutic areas",
    icon: Users,
  },
  {
    type: "Oral Presentations",
    count: 150,
    duration: "15 minutes",
    description: "Research presentations by scientists and industry experts",
    icon: Microscope,
  },
  {
    type: "Poster Sessions",
    count: 300,
    duration: "2 hours",
    description: "Interactive poster presentations and discussions",
    icon: FileText,
  },
  {
    type: "Workshops",
    count: 8,
    duration: "3 hours",
    description: "Hands-on training sessions on latest technologies",
    icon: BookOpen,
  },
  {
    type: "Panel Discussions",
    count: 6,
    duration: "60 minutes",
    description: "Expert panels on industry trends and challenges",
    icon: Users,
  },
];

const abstractGuidelines = [
  {
    category: "Original Research",
    description: "Novel findings from experimental or clinical studies",
    wordLimit: "300 words",
    sections: ["Background", "Methods", "Results", "Conclusion"],
  },
  {
    category: "Case Studies",
    description: "Clinical cases demonstrating innovative treatment approaches",
    wordLimit: "250 words",
    sections: ["Background", "Case Presentation", "Discussion", "Conclusion"],
  },
  {
    category: "Review Articles",
    description: "Comprehensive reviews of current literature and practices",
    wordLimit: "400 words",
    sections: [
      "Background",
      "Methodology",
      "Key Findings",
      "Future Directions",
    ],
  },
  {
    category: "Technology Innovation",
    description: "New technologies, methods, or digital solutions in pharma",
    wordLimit: "300 words",
    sections: [
      "Innovation Description",
      "Applications",
      "Benefits",
      "Implementation",
    ],
  },
];

export default function ScientificPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pharmaceutical-50 to-primary-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pharmaceutical-600 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Scientific Program
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pharmaceutical-100">
              Advancing Pharmaceutical Science Through Innovation
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Microscope className="h-5 w-5" />
                <span>500+ Scientific Presentations</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>150+ Expert Speakers</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>6 Specialized Tracks</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Tracks */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Scientific Tracks
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Explore cutting-edge research across six specialized tracks
              designed to showcase the latest developments in pharmaceutical
              science and technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scientificTracks.map((track, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-pharmaceutical-100 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {track.title}
                </h3>
                <p className="text-secondary-600 mb-6">{track.description}</p>

                <div className="flex justify-between items-center mb-6 text-sm">
                  <div className="text-center">
                    <div className="font-bold text-pharmaceutical-600 text-lg">
                      {track.sessions}
                    </div>
                    <div className="text-secondary-500">Sessions</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-primary-600 text-lg">
                      {track.speakers}
                    </div>
                    <div className="text-secondary-500">Speakers</div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">
                    Key Topics:
                  </h4>
                  <ul className="space-y-2">
                    {track.topics.map((topic, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-secondary-600"
                      >
                        <ChevronRight className="h-3 w-3 text-pharmaceutical-600 flex-shrink-0" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Session Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Session Types
            </h2>
            <p className="text-lg text-secondary-600">
              Diverse formats to maximize learning and networking opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sessionTypes.map((session, index) => {
              const IconComponent = session.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 bg-pharmaceutical-50 rounded-xl border border-pharmaceutical-100"
                >
                  <IconComponent className="h-12 w-12 text-pharmaceutical-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {session.type}
                  </h3>
                  <div className="text-3xl font-bold text-pharmaceutical-600 mb-2">
                    {session.count}
                  </div>
                  <div className="text-sm text-secondary-600 mb-3">
                    Duration: {session.duration}
                  </div>
                  <p className="text-secondary-600 text-sm">
                    {session.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Abstract Submission */}
      <section className="py-20 bg-gradient-to-r from-pharmaceutical-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Abstract Submission Guidelines
            </h2>
            <p className="text-lg text-secondary-600 mb-8">
              Share your research with the global pharmaceutical community
            </p>
            <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full">
              <Clock className="h-4 w-4" />
              <span className="font-semibold">Deadline: October 15, 2025</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {abstractGuidelines.map((guideline, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 border border-pharmaceutical-100"
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-4">
                  {guideline.category}
                </h3>
                <p className="text-secondary-600 mb-4">
                  {guideline.description}
                </p>

                <div className="mb-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-pharmaceutical-100 text-pharmaceutical-800">
                    {guideline.wordLimit}
                  </span>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary-900 mb-2">
                    Required Sections:
                  </h4>
                  <ul className="space-y-1">
                    {guideline.sections.map((section, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-secondary-600"
                      >
                        <ChevronRight className="h-3 w-3 text-pharmaceutical-600 flex-shrink-0" />
                        {section}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-pharmaceutical-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-pharmaceutical-700 transition-colors">
              Submit Your Abstract
            </button>
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Awards & Recognition
            </h2>
            <p className="text-lg text-secondary-600">
              Excellence in pharmaceutical research will be recognized and
              rewarded
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-yellow-200">
              <Award className="h-16 w-16 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Best Oral Presentation
              </h3>
              <p className="text-secondary-600 mb-4">
                ₹50,000 cash prize + certificate
              </p>
              <p className="text-sm text-secondary-500">
                Awarded for outstanding research presentation
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl border border-gray-200">
              <Award className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Best Poster Award
              </h3>
              <p className="text-secondary-600 mb-4">
                ₹25,000 cash prize + certificate
              </p>
              <p className="text-sm text-secondary-500">
                Recognizing innovative research posters
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200">
              <Award className="h-16 w-16 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Young Scientist Award
              </h3>
              <p className="text-secondary-600 mb-4">
                ₹30,000 cash prize + certificate
              </p>
              <p className="text-sm text-secondary-500">
                For researchers under 35 years
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Important Scientific Dates
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-pharmaceutical-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">
                Abstract Submission Opens
              </h3>
              <p className="text-secondary-300">August 1, 2025</p>
            </div>
            <div className="text-center">
              <Calendar className="h-12 w-12 text-pharmaceutical-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">
                Abstract Submission Deadline
              </h3>
              <p className="text-secondary-300">October 15, 2025</p>
            </div>
            <div className="text-center">
              <Calendar className="h-12 w-12 text-pharmaceutical-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">
                Acceptance Notification
              </h3>
              <p className="text-secondary-300">November 1, 2025</p>
            </div>
            <div className="text-center">
              <Calendar className="h-12 w-12 text-pharmaceutical-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Final Program Release</h3>
              <p className="text-secondary-300">December 1, 2025</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
