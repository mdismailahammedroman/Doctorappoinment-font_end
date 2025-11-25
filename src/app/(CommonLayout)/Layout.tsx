import PublicNavbar from "@/components/sheared/PublicNavbar";

const CommonLayout = ({ children } : { children: React.ReactNode }) => {
    return (
        <>  
            <PublicNavbar/>
            {children}
        </>
    );
};

export default CommonLayout;