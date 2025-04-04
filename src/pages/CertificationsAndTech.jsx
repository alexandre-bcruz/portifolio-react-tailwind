import { TechStack } from './TechStack';  

export function CertificationsAndTech() {
    const certifications = [
        {
            name: 'AWS Certified Solutions Architect',
            link: 'https://www.credly.com/badges/29f8be6e-82b6-463d-a041-4a6751b51124/linked_in_profile',
            badge: 'https://images.credly.com/size/340x340/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png',
        },
        {
            name: 'Solution Architecture – Expert',
            link: 'https://www.credly.com/badges/10cc12ca-e176-4483-95e8-c50b02966a11',
            badge: 'https://images.credly.com/images/38f96efc-7070-443e-97ba-0ce93cba96aa/image.png',
        },
        {
            name: 'Solution Architecture – Foundation',
            link: 'https://www.credly.com/earner/earned/badge/bbff6648-a146-4cb3-b9e7-22b7a0112e9e',
            badge: 'https://images.credly.com/size/340x340/images/e88bc4a2-9b3f-4645-ba36-c6c8bb54c3b5/image.png',
        },
        {
            name: 'Practitioner - D&A Foundation',
            link: 'https://www.credly.com/earner/earned/badge/78d3d389-2269-4f43-b964-1ad155b3e794',
            badge: 'https://images.credly.com/images/3151b077-3f06-49e8-b319-e4ef69bb19ec/image.png',
        },
    ];

    return (
        <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6">Certifications & Tech Stack</h2>
            <div className="flex flex-col gap-12">
                {/* Certifications */}
                <div className="w-full">
                    <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {certifications.map(cert => (
                            <div key={cert.name} className="bg-gray-800 p-6 rounded-lg shadow-lg text-white flex flex-col items-center">
                                <img
                                    src={cert.badge}
                                    alt={cert.name}
                                    className="w-24 h-24 mb-4"
                                />
                                <h4 className="text-lg font-semibold mb-2 text-center">{cert.name}</h4>
                                <a
                                    href={cert.link}
                                    target="_blank"
                                    className="text-blue-400 hover:text-blue-600 text-sm"
                                >
                                    View Certification
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                    <TechStack />
            </div>
        </section>
    );
}