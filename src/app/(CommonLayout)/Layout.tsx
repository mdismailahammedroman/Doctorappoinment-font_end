import PublicFooter from "@/components/sheared/PublicFooter";
import PublicNavbar from "@/components/sheared/PublicNavbar";

const CommonLayout = ({ children } : { children: React.ReactNode }) => {
    return (
        <>  
            <PublicNavbar/>
            {children}
            <PublicFooter/>
        </>
    );
};

export default CommonLayout;