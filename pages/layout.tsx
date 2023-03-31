import Side_bar from "@/components/sidebar";

const Layout = ({children}:any) => {
    return ( 
        <div className="flex">
            <Side_bar/>
            <div className="bg-[#343541] flex-1">
                {children}
            </div>
        </div>
     );
}
 
export default Layout;