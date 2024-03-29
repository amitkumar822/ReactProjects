import styled from "styled-components";

/*👉 Style Components -> {static style}👌*/
const Nav = styled.div`
    width : 100%;
    height: 70px;
    background: red;
    background: linear-gradient(170deg,#1bc059, #0d47a1);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    position: fixed;
    z-index:9999999;
    top: 0;
    
`;

const Title = styled.div`
    font-size: 30px;
    color: #fff;
    font-weight: 600;
    font-family: 'Times New Roman', Times, serif;
    text-transform: uppercase;
    margin-left: 20px;
    cursor: pointer;
    // display:flex;

    &:hover{color:#212121}
`;

const CartIconCountainer = styled.div`
    position: relative;
    cursor: pointer;
`;

const CartImg = styled.img`
    height: 48px;
    margin-right: 20px;
`;


const CartCount = styled.div`
    background-color: ${(props)=>props.color};
    border-radius: 50%;
    padding: 4px 8px;
    position: absolute;
    right: 10px;
    top: -5px;
    font-size: 12px;
    visibility: ${(props)=> props.show ? "visible" : "hidden"};
`;



function Navbar (props){
    const {cartCount} = props;
    return(
        <>
        <Nav> 
            <Title> Movie-App </Title>
            <CartIconCountainer>
                <CartImg alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png"/>
                <CartCount color="yellow" show = {true}>{cartCount}</CartCount>
            </CartIconCountainer>
        </Nav>
        
        {/*🫸 <div style={styles.nav}> 
            <div style={styles.title}>
                Movie-App
            </div>
            <div style={styles.cartContainer}>
                <img alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/891/891462.png" style={styles.cartIcon}/>
                <span style={styles.cartCount}>3</span>
            </div>
        </div> 🫷*/}
        </>
    )
}

export default Navbar

/*Style Inline */
/*👉
const styles = {
    nav:{
        height: 70,
        background:"#4267b2",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position:"reletive"
    },

    title:{
        fontSize:30,
        color: "#fff",
        fontWeight: 600,
        fontFamily: '"Montserrat","sans-serif"',
        textTransform: "uppercase",
        marginLeft: 20
    },

    cartContainer:{
        position: "relative",
        cursor: "pointer",
    },

    cartIcon:{
        height:48,
        marginRight:20
    },

    cartCount:{
        background:"orange",
        borderRadius:"50%",
        padding:"4px 8px",
        position: "absolute",
        right:10,
        top:-5,
        fontSize: 12
    }

}
*/