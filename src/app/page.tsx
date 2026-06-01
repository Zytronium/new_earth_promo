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
            content: "NASA's New Earth Initiative represents humanity's most ambitious endeavor: establishing a permanent colony on a superhabitable exoplanet less than 50 light-years from our solar system. This generational mission will carry 700-800 brave colonists on an approximately 400-year journey to secure humanity's future among the stars. Set to launch in 2043, NASA is already looking for colonists willing to start the journey. For a price of 10,000 Unicredits (Earth's new universal currency), or about the value $16,000 USD was in 2025, per adult, or 5,000 Unicredits per child under the age of 16 years at the time of launch, you can secure yourself a home on this generational trip to a new world. Terms and conditions of application and cancellation apply.",
        },
        purpose: {
            title: "Our Purpose",
            content: "As Earth faces mounting environmental and resource challenges, New Earth offers hope for humanity's long-term survival. This mission aims to establish a self-sustaining colony on a world with abundant resources, diverse ecosystems, and conditions potentially even more favorable to life than Earth itself. New Earth Colony will establish its own strict laws and regulations, including environmental laws preventing the same environmental crisis we face on Earth today. Together, we will build Humanity a future we can thrive in and be proud of.",
        },
        planet: {
            title: "New Earth",
            content: "New Earth is a superhabitable planet 1.2 times the size of Earth, orbiting within the optimal habitable zone of a K-type orange dwarf star recently discovered by the James Webb telescope. This star is slightly cooler and more stable than our Sun, with a lifespan projected at 30 billion years, providing ample time for complex life to flourish. New Earth completes its orbit every 385 days and benefits from two small moons that stabilize its axial tilt, creating predictable seasons and climate patterns. The planet features a thicker atmosphere rich in oxygen (25% compared to Earth's 21%), offering enhanced protection from cosmic radiation while supporting robust biological activity. With 73% of its surface covered by liquid water across four major oceans and three supercontinents, New Earth provides significantly more habitable land area than Earth. Spectroscopic analysis has confirmed the presence of chlorophyll-like compounds, indicating photosynthetic plant life, while thermal imaging suggests diverse animal populations across multiple climate zones. The planet's magnetic field is 1.4 times stronger than Earth's, providing superior protection from solar winds. Early observations have identified vast forests, sprawling grasslands, and complex river systems, all pointing to a thriving biosphere that could support human colonization with minimal - if any - terraforming required.",
        },
        spacecraft: {
            title: "The Colony Ships",
            content: "Our revolutionary deconstructable colony ship fleet represents the pinnacle of human engineering. Designed to sustain multiple generations in several groups during the 395-year voyage at around 11.9% of the speed of light, these ships will provide everything needed for life, work, community, and expanding family. 24 of these colony ships will travel closely together, able to interact with each-other and even transfer personnel. In the case of an unlikely disaster crippling or or destroying one ship, survivors can relocate to other ships and the colonists survive to reach the destination. Additionally, splitting the colonists into several ships increases fuel efficiency and allows us to produce the ships in bulk, enabling an earlier launch date than otherwise required for one giant colony ship. The ships are designed for generational use, with facilities on board each ship to sustain thriving generations for several lifetimes. Each ship is also equipped with revolutionary artificial gravity generators to keep life on board healthy and natural. Finally, each ship is equipped with an experimental space weapon system to destroy asteroids on a collision course or defend against hostile aliens in the rare case that any exist and encounter our ships. Upon arrival, all sections of each ship can be taken apart and repurposed to establish the first settlement structures on New Earth.",
        },
        journey: {
            title: "The Journey",
            content: "The voyage to New Earth will span 395 years across several generations of colonists. While we cannot predict future technological advances that might shorten this journey (such as FTL craft from Earth or mid-journey engine enhancements), the mission is designed to be entirely self-sufficient and successful based on current technology alone. While we cannot provide any sort of deep sleep to shorten the perceived duration of the journey, the colony ships are designed to support growing populations and are well equipped for any emergencies or unexpected astronomical events.",
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
                                className={`px-6 py-3 font-semibold transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? "text-cyan-400 border-b-4 border-cyan-400 scale-105 shadow-lg shadow-cyan-400/50"
                                        : "text-gray-300 hover:text-cyan-300 hover:scale-105"
                                }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="bg-gray-900 rounded-lg shadow-lg p-8 md:p-12 outline-1 outline-cyan-300">
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
