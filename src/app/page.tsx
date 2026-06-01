"use client";

import {useState, useEffect} from "react";

export default function Home() {
    const [activeTab, setActiveTab] = useState("mission");
    const [countdown, setCountdown] = useState({
        years: 0,
        months: 0,
        days: 0,
    });

    useEffect(() => {
        const launchDate = new Date("2043-01-01T00:00:00").getTime();

        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = launchDate - now;

            if (distance > 0) {
                const totalDays = Math.floor(distance / (1000 * 60 * 60 * 24));
                const years = Math.floor(totalDays / 365);
                const months = Math.floor((totalDays % 365) / 30);
                const days = Math.floor((totalDays % 365) % 30);

                setCountdown({
                    years,
                    months,
                    days,
                });
            }
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);

        return () => clearInterval(interval);
    }, []);

    const tabs = [
        {id: "mission", label: "Mission"},
        {id: "purpose", label: "Purpose"},
        {id: "planet", label: "Planet"},
        {id: "spacecraft", label: "Spacecraft"},
        {id: "journey", label: "Journey"},
    ];

    const tabContent = {
        mission: {
            title: "The Mission",
            content: "NASA's New Earth Initiative represents humanity's most ambitious endeavor: establishing a permanent colony on a superhabitable exoplanet less than 50 light-years from our solar system. This generational mission will carry 700-800 brave colonists on a 400-year journey to secure humanity's future among the stars.",
        },
        purpose: {
            title: "Our Purpose",
            content: "As Earth faces mounting environmental and resource challenges, New Earth offers hope for humanity's long-term survival. This mission aims to establish a self-sustaining colony on a world with abundant resources, diverse ecosystems, and conditions potentially even more favorable to life than Earth itself.",
        },
        planet: {
            title: "New Earth",
            content: "New Earth is a superhabitable planet 1.2 times the size of Earth, featuring a thicker atmosphere and significantly more habitable surface area. Early observations reveal promising signs of both plant and animal life, suggesting potential food sources and a thriving ecosystem awaiting our arrival.",
        },
        spacecraft: {
            title: "The Colony Ship",
            content: "Our revolutionary deconstructable colony ship represents the pinnacle of human engineering. Designed to sustain multiple generations during the 400-year voyage, the ship will provide everything needed for life, work, and community. Upon arrival, sections can be repurposed to establish the first settlement structures on New Earth.",
        },
        journey: {
            title: "The Journey",
            content: "The voyage to New Earth will span approximately 400 years across generations of colonists. While we cannot predict future technological advances that might shorten this journey (such as FTL craft or mid-journey engine enhancements), the mission is designed to be self-sufficient and successful based on current technology alone.",
        },
    };

    return (
        <main className="flex-1">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{backgroundImage: "url('/hero.jpg')"}}
                />

                {/* Gradient Overlay with Texture */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(135deg, rgba(0, 183, 235, 0.85) 0%, rgba(0, 0, 0, 0.6) 50%, rgba(31, 41, 55, 1) 100%)",
                        backgroundBlendMode: "multiply",
                    }}
                />
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255, 255, 255, 0.03) 2px, rgba(255, 255, 255, 0.03) 4px)",
                    }}
                />

                {/* Top to Bottom Gradient Fade */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: "linear-gradient(to bottom, transparent 0%, transparent 70%, rgb(31, 41, 55) 100%)",
                    }}
                />

                {/* Hero Content */}
                <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center text-white">
                    <h1 className="text-6xl md:text-7xl font-bold mb-6 drop-shadow-lg">
                        New Earth
                    </h1>
                    <p className="text-2xl md:text-3xl mb-12 drop-shadow-md max-w-3xl mx-auto">
                        Humanity&apos;s Future Among The Stars
                    </p>

                    {/* Countdown Timer */}
                    <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 mb-12 inline-block">
                        <h2 className="text-xl mb-4 uppercase tracking-wider">Launch Countdown</h2>
                        <div className="flex gap-6 justify-center">
                            <div className="flex flex-col items-center">
                                <div className="text-5xl font-bold">{countdown.years}</div>
                                <div className="text-sm uppercase tracking-wide mt-2">Years</div>
                            </div>
                            <div className="text-5xl font-bold">:</div>
                            <div className="flex flex-col items-center">
                                <div className="text-5xl font-bold">{countdown.months}</div>
                                <div className="text-sm uppercase tracking-wide mt-2">Months</div>
                            </div>
                            <div className="text-5xl font-bold">:</div>
                            <div className="flex flex-col items-center">
                            <div className="text-5xl font-bold">{countdown.days}</div>
                                <div className="text-sm uppercase tracking-wide mt-2">Days</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs Section */}
            <section className="py-16 px-6 bg-gray-800">
                <div className="max-w-6xl mx-auto">
                    {/* Tab Navigation */}
                    <div className="flex flex-wrap justify-center gap-2 mb-12 border-b border-gray-700">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-3 font-semibold transition-colors ${
                                    activeTab === tab.id
                                        ? "text-cyan-400 border-b-4 border-cyan-400"
                                        : "text-gray-300 hover:text-cyan-300"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="bg-gray-900 rounded-lg shadow-lg p-8 md:p-12">
                        <h2 className="text-4xl font-bold mb-6 text-white">
                            {tabContent[activeTab as keyof typeof tabContent].title}
                        </h2>
                        <p className="text-lg text-gray-300 leading-relaxed">
                        {tabContent[activeTab as keyof typeof tabContent].content}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
