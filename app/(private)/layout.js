import Header from "@/components/shared/Header";

export default function PrivateLayout({ children }) {
    return (
        <div className="bg-[linear-gradient(135deg,#061131,#091843)]">
            <Header />
            {children}
        </div>
    );
}
