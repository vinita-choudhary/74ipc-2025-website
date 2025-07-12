import { Metadata } from "next";
import {
  Calendar,
  Clock,
  Users,
  CreditCard,
  CheckCircle,
  FileText,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Registration",
  description:
    "Register for the 74th Indian Pharmaceutical Congress 2025. Choose from various registration categories with early bird discounts available.",
};

const registrationCategories = [
  {
    category: "IPCA Members",
    earlyBird: "₹8,000",
    regular: "₹10,000",
    spot: "₹12,000",
    benefits: [
      "Conference Kit",
      "All Sessions Access",
      "Lunch & Tea",
      "Certificate",
      "Networking Events",
    ],
  },
  {
    category: "Non-Members (Industry)",
    earlyBird: "₹12,000",
    regular: "₹15,000",
    spot: "₹18,000",
    benefits: [
      "Conference Kit",
      "All Sessions Access",
      "Lunch & Tea",
      "Certificate",
      "Networking Events",
    ],
  },
  {
    category: "Non-Members (Academia)",
    earlyBird: "₹6,000",
    regular: "₹8,000",
    spot: "₹10,000",
    benefits: [
      "Conference Kit",
      "All Sessions Access",
      "Lunch & Tea",
      "Certificate",
      "Networking Events",
    ],
  },
  {
    category: "Students",
    earlyBird: "₹2,000",
    regular: "₹3,000",
    spot: "₹4,000",
    benefits: [
      "Conference Kit",
      "All Sessions Access",
      "Lunch & Tea",
      "Certificate",
    ],
  },
  {
    category: "Accompanying Person",
    earlyBird: "₹4,000",
    regular: "₹5,000",
    spot: "₹6,000",
    benefits: [
      "Welcome Kit",
      "Cultural Events",
      "Lunch & Tea",
      "Networking Events",
    ],
  },
];

const importantDates = [
  {
    date: "September 15, 2025",
    event: "Early Bird Registration Deadline",
    status: "upcoming",
  },
  {
    date: "November 15, 2025",
    event: "Regular Registration Deadline",
    status: "upcoming",
  },
  {
    date: "December 19, 2025",
    event: "Spot Registration Opens",
    status: "upcoming",
  },
  { date: "December 19, 2025", event: "Conference Begins", status: "upcoming" },
];

export default function RegistrationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pharmaceutical-50 to-primary-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pharmaceutical-600 to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Registration
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pharmaceutical-100">
              Join the 74th Indian Pharmaceutical Congress 2025
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>December 19-21, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>3 Days of Innovation</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>2000+ Participants Expected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Registration Categories & Fees
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Choose the registration category that best fits your profile. All
              fees include access to technical sessions, exhibition,
              refreshments, and conference materials.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {registrationCategories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-pharmaceutical-100 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-secondary-900 mb-6">
                  {category.category}
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">
                      Early Bird
                    </span>
                    <span className="text-lg font-bold text-pharmaceutical-600">
                      {category.earlyBird}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">Regular</span>
                    <span className="text-lg font-bold text-primary-600">
                      {category.regular}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-secondary-600">
                      Spot Registration
                    </span>
                    <span className="text-lg font-bold text-secondary-600">
                      {category.spot}
                    </span>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-secondary-900 mb-3">
                    Includes:
                  </h4>
                  <ul className="space-y-2">
                    {category.benefits.map((benefit, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-secondary-600"
                      >
                        <CheckCircle className="h-4 w-4 text-primary-600 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full mt-6 bg-pharmaceutical-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-pharmaceutical-700 transition-colors">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Important Dates
            </h2>
            <p className="text-lg text-secondary-600">
              Mark your calendar with these important registration deadlines
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {importantDates.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6 p-6 bg-pharmaceutical-50 rounded-lg border border-pharmaceutical-100"
                >
                  <div className="flex-shrink-0">
                    <Calendar className="h-8 w-8 text-pharmaceutical-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-secondary-900">
                      {item.event}
                    </h3>
                    <p className="text-pharmaceutical-600 font-medium">
                      {item.date}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-gradient-to-r from-pharmaceutical-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Payment Methods
            </h2>
            <p className="text-lg text-secondary-600">
              We accept multiple payment methods for your convenience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <CreditCard className="h-12 w-12 text-pharmaceutical-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Credit/Debit Cards
              </h3>
              <p className="text-secondary-600">
                Visa, MasterCard, RuPay accepted
              </p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <FileText className="h-12 w-12 text-pharmaceutical-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                Bank Transfer
              </h3>
              <p className="text-secondary-600">NEFT/RTGS transfers accepted</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-md">
              <CheckCircle className="h-12 w-12 text-pharmaceutical-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                UPI/Digital Wallets
              </h3>
              <p className="text-secondary-600">
                PhonePe, GPay, Paytm supported
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Instructions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              How to Register
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 bg-pharmaceutical-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    Fill Registration Form
                  </h3>
                  <p className="text-secondary-600">
                    Complete the online registration form with accurate details
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 bg-pharmaceutical-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    Make Payment
                  </h3>
                  <p className="text-secondary-600">
                    Choose your preferred payment method and complete the
                    transaction
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 bg-pharmaceutical-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    Receive Confirmation
                  </h3>
                  <p className="text-secondary-600">
                    Get your registration confirmation via email with
                    registration ID
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-8 h-8 bg-pharmaceutical-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2">
                    Attend Conference
                  </h3>
                  <p className="text-secondary-600">
                    Present your confirmation at the venue to collect your
                    conference kit
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex gap-3">
                <AlertCircle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-yellow-800 mb-2">
                    Important Note
                  </h3>
                  <p className="text-yellow-700 text-sm">
                    Registration fees are non-refundable. However, registrations
                    can be transferred to another person with prior notification
                    to the organizing committee. Student registrations require
                    valid ID proof.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Registration */}
      <section className="py-20 bg-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need Help with Registration?
          </h2>
          <p className="text-xl text-secondary-300 mb-8">
            Our registration support team is here to assist you
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div>
              <h3 className="font-semibold mb-2">Email Support</h3>
              <p className="text-secondary-300">registration@74ipc2025.org</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Phone Support</h3>
              <p className="text-secondary-300">+91-80-1234-5678</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
