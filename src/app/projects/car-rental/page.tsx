import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Car Rental System — Project | Redeemed Bindura",
  description:
    "A role-based car rental system (ASP.NET MVC + SQL Server). Customers can register; Admin & Staff accounts are seeded. Demo + safety notes included below.",
};

// Hard-coded demo URL (works on Netlify without env vars)
const LIVE_DEMO_URL =
  "https://rbcarrentals-webapp-g8exapb4hueydwcy.uksouth-01.azurewebsites.net";

export default function CarRentalProject() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Hero */}
      <section className="text-center py-20 px-4">
        <h1 className="text-5xl font-extrabold mb-6">Car Rental System</h1>
        <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-300">
          A role-based car rental platform built with{" "}
          <span className="font-semibold">ASP.NET MVC</span> and{" "}
          <span className="font-semibold">SQL Server</span>. It supports Admin, Employee
          (Staff), and Customer roles with vehicle management, availability status, and a
          booking flow backed by a relational database. 
        </p>

        <p className="text-sm max-w-2xl mx-auto text-gray-400">
          <span className="font-semibold">About the project:</span> I built this for my Computer Science NEA, which gave me hands-on experience with real development practices — from planning to testing.
        </p>

        <div className="flex flex-wrap gap-2 justify-center mt-6">
          <span className="px-3 py-1 rounded-full bg-gray-800/60 text-sm border border-white/10">ASP.NET MVC</span>
          <span className="px-3 py-1 rounded-full bg-gray-800/60 text-sm border border-white/10">C# / .NET</span>
          <span className="px-3 py-1 rounded-full bg-gray-800/60 text-sm border border-white/10">Entity Framework</span>
          <span className="px-3 py-1 rounded-full bg-gray-800/60 text-sm border border-white/10">SQL Server</span>
          <span className="px-3 py-1 rounded-full bg-gray-800/60 text-sm border border-white/10">Azure App Service</span>
          <span className="px-3 py-1 rounded-full bg-gray-800/60 text-sm border border-white/10">Azure SQL</span>
        </div>

        {/* Device & performance note */}
        <div className="mt-8 max-w-3xl mx-auto rounded-xl border border-blue-400/30 bg-blue-500/10 px-4 py-3 text-sm text-gray-300">
          <p>
            <span className="font-semibold">Heads-up:</span> the demo is{" "}
            <span className="font-semibold">more visually appealing on a laptop</span> for
            <span className="font-semibold"> Admin</span> and
            <span className="font-semibold"> Staff</span> roles.{" "}
            <span className="font-semibold">Customers</span> get a decent experience on
            any device. All roles work on all devices. If the website feels slow, please
            be patient — I’m using low-budget hosting for this demo.
          </p>
        </div>
      </section>

      {/* Safety & Payment Sandbox */}
      <section className="max-w-4xl mx-auto px-6 mb-12">
        <div className="rounded-2xl border border-yellow-400/30 bg-yellow-500/10 p-5">
          <h2 className="text-2xl font-bold mb-2">Important — Demo Safety</h2>
          <p className="text-gray-200">
            Please <span className="font-semibold">do not use real personal details</span>{" "}
            when creating an account or filling out forms. Payments are simulated. Use these
            <i> fake</i> details for testing:
          </p>
          <ul className="mt-3 text-gray-200 space-y-1">
            <li><span className="font-semibold">Cardholder Name:</span> John Sample</li>
            <li>
              <span className="font-semibold">Card Number:</span> 4111 1111 1111 1111{" "}
              <span className="text-gray-400">(digits only; only the last 4 are submitted)</span>
            </li>
            <li><span className="font-semibold">Expiry:</span> 08/26</li>
            <li><span className="font-semibold">CVV:</span> 789</li>
          </ul>
          <p className="mt-3 text-gray-300">
            Payments are simulated with a <span className="font-semibold">50% chance</span> of
            success or failure. If it says <span className="font-semibold">Failed</span>, try again.
          </p>
        </div>
      </section>

      {/* Screenshots */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-16 px-4">
        {[
          { src: "/screen2.png", alt: "Booking form" },
          { src: "/screen1.png", alt: "Vehicles dashboard" },
          { src: "/screen3.png", alt: "Role-based login" },
        ].map((shot) => (
          <div
            key={shot.src}
            className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg border border-white/10"
          >
            <Image src={shot.src} alt={shot.alt} fill className="object-cover" />
          </div>
        ))}
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-6 mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Key Features</h2>
        <ul className="list-disc list-inside space-y-3 text-gray-300">
          <li>
            <span className="font-semibold">Role-based authentication</span> — Admin, Employee (Staff),
            and Customer permissions with protected areas.
          </li>
          <li>
            <span className="font-semibold">Vehicle management</span> — Staff can create, update, and retire cars from
            the fleet, and set status: <i>Available</i>, <i>Booked</i>, or <i>Maintenance</i> (affects what Customers see).
          </li>
          <li>
            <span className="font-semibold">Booking flow</span> — Customers browse available cars and create
            reservations with real-time database updates.
          </li>
          <li>
            <span className="font-semibold">SQL Server + EF</span> — robust, relational storage for users, vehicles, and
            bookings.
          </li>
        </ul>
      </section>

      {/* Roles & Permissions */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <h2 className="text-2xl font-bold mb-4">Registration & Roles</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li><span className="font-semibold">Customers</span> can self-register and are the <span className="font-semibold">only role</span> allowed to perform bookings.</li>
          <li><span className="font-semibold">Staff</span> can manipulate vehicle data (add/update) and set status to <i>Available</i>, <i>Booked</i>, or <i>Maintenance</i>.</li>
          <li><span className="font-semibold">Admins</span> see an admin dashboard with insights, but <span className="font-semibold">cannot add, delete, or edit vehicles</span> — only Staff can do that.</li>
        </ul>

        <div className="mt-5 rounded-xl border border-blue-400/30 bg-blue-500/10 p-4">
          <p className="text-gray-200">
            <span className="font-semibold">Staff Edit Tip:</span> when you click <i>Edit</i> on a vehicle, you{" "}
            <span className="font-semibold">must upload a (new) car image</span>, even if you don’t want to change it.
            Re-uploading is required to save the form. Please use appropriate, real-model car images when trying the demo.
          </p>
        </div>
      </section>

      {/* Demo Accounts */}
      <section className="max-w-4xl mx-auto px-6 mb-16">
        <h2 className="text-2xl font-bold mb-4">Seeded Demo Accounts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-gray-800/70 p-5">
            <h3 className="font-semibold text-lg mb-2">Admins</h3>
            <ul className="space-y-2 text-gray-200">
              <li>
                <div><span className="font-semibold">Email:</span> sarah.johnson@rbcarrentals.com</div>
                <div><span className="font-semibold">Password:</span> Admin@S#123!Drive</div>
                <div><span className="font-semibold">Name:</span> Sarah Johnson</div>
              </li>
              <li className="pt-2 border-t border-white/5">
                <div><span className="font-semibold">Email:</span> james.lee@rbcarrentals.com</div>
                <div><span className="font-semibold">Password:</span> JL_Admin*Access#1</div>
                <div><span className="font-semibold">Name:</span> James Lee</div>
              </li>
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-gray-800/70 p-5">
            <h3 className="font-semibold text-lg mb-2">Staff</h3>
            <ul className="space-y-2 text-gray-200">
              <li>
                <div><span className="font-semibold">Email:</span> john.carter@rbcarrentals.com</div>
                <div><span className="font-semibold">Password:</span> Jc@2025!Drive*#</div>
                <div><span className="font-semibold">Name:</span> John Carter</div>
              </li>
              <li className="pt-2 border-t border-white/5">
                <div><span className="font-semibold">Email:</span> maria.lopez@rbcarrentals.com</div>
                <div><span className="font-semibold">Password:</span> ML$Safe123!@</div>
                <div><span className="font-semibold">Name:</span> Maria Lopez</div>
              </li>
              <li className="pt-2 border-t border-white/5">
                <div><span className="font-semibold">Email:</span> david.smith@rbcarrentals.com</div>
                <div><span className="font-semibold">Password:</span> Dsmith#22&Rent</div>
                <div><span className="font-semibold">Name:</span> David Smith</div>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-gray-300 mt-4">
          Customers may register directly in the app. Admin and Staff users are pre-seeded for testing.
        </p>
      </section>

      {/* Demo CTA */}
      <section className="text-center mb-24 px-6">
        <h2 className="text-3xl font-bold mb-4">Try the Demo</h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Explore the different roles using the seeded accounts above, or register as a Customer to try bookings.
        </p>

        <Link
          href={LIVE_DEMO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
        >
          🚗 Launch Demo
        </Link>

        {/* Back to Projects */}
        <div className="mt-6">
          <Link href="/projects" className="text-blue-400 hover:text-blue-300 underline underline-offset-4">
            ← Back to Projects
          </Link>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-white/10 bg-gray-900/60 p-6 text-center">
          <h2 className="text-2xl font-bold mb-2">Questions or feedback?</h2>
          <p className="text-gray-300">Feel free to explore the demo and reach out with any proposals or feedback.</p>
          <p className="mt-3">
            <span className="font-semibold">Email:</span>{" "}
            <a className="underline underline-offset-4 hover:text-blue-300" href="mailto:rbinduradevelopments@gmail.com">
              rbinduradevelopments@gmail.com
            </a>
          </p>
          <p className="mt-1">
            <span className="font-semibold">Phone:</span>{" "}
            <a className="underline underline-offset-4 hover:text-blue-300" href="tel:+447565389794">
              +44 7565 389 794
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
