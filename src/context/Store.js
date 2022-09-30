import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { NavLink, useNavigate , Link } from "react-router-dom";
export const Context = React.createContext();
// http://localhost:3009 
// http://server.fahimtraders.com/
const Store = ({ children }) => {
   
  const [serverUrl, setServerurl] = useState("http://localhost:3009");
  const [packages, setPackages] = useState([]);
  const [recharge, setRecharge] = useState([]);
  const [userdata, setUserdata] = useState([]);
  const [authUser, setAuthuser] = useState(false);
  const [userBal, setUserbal] = useState([]);
  const [withdraw, setWithdraw] = useState([]);






  ////////////////////////////////
  const [tinu, setTinu] = useState("jayed");
  const [edit, setEdit] = useState(false);
  const [accountList, setAccountList] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [ sellData, setSellData] = useState([]);
  const [productList, setproductList] = useState([]);
  const [sproductList, setSproductList] = useState([]);
  const [shead, setShead] = useState([]);
  const [comData, setComdata] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCart, setisCart] = useState(false);

 




  const [accounts, setAccounts] = useState({
    id: new Date().getTime().toString(),
    sell_type: "SELL",
    bill_type: "",
    account: "1",
    particular: "",
    p_id: "",
    product: "",
    qty1: "0",
    qty2: "0",
    rate: "0",
    total: "0",
    memo: "",
  });

  
  const [optionlcclient, setOptionlcclient] = useState( { value: "", label: "Select Account..." });
  const [optionSelectedaccount, setOptionSelectedaccount] = useState( { value: "", label: "Select Lc..." });
  const [optionSelectedtransaction, setOptionSelectedtransaction] = useState( { value: "", label: "" });
  const [optionSelectedimp, setOptionSelectedimp] = useState( { value: "", label: "" });
  const [optionSelectedexp, setOptionSelectedexp] = useState( { value: "", label: "" });



  const [editItem, setEditItem] = useState(null)


  const getWithdrawrecord = (props) => {
    // e.preventDefault();
    Axios.post(serverUrl+`/withdrawrec`, {
      data: props,
    }).then((response) => {
      setWithdraw(response.data);
    });
  };
  const getUserbalance  = (props) => {
    // e.preventDefault();
    Axios.post(serverUrl+`/userbalance`, {
      data: props,
    }).then((response) => {
      setUserbal(response.data[0]);
    });
  };
  const getPackage = () => {
    Axios.get(serverUrl+`/packages`).then((response) => {
      setPackages(response.data);
    });
 
  };
  const getRecharge  = (props) => {
    // e.preventDefault();
    Axios.post(serverUrl+`/recharge`, {
      data: props,
    }).then((response) => {
      setRecharge(response.data);
    });
  };

  const withDrawreq  = (props) => {
    // e.preventDefault();
    Axios.post(serverUrl+`/withdrawreq`, {
      data: props,
    }).then((response) => {

      if(response.data=='error'){
        warningnotify("Wrong credential")
      } else{
        successnotify("Wrong credential")
      }
      // setRecharge(response.data);
    });
  };

  const updatePackage  = (props) => {
    // e.preventDefault();
    Axios.post(serverUrl+`/uppackages`, {
      data: props,
    }).then(() => {
   
    });
  };

  const LoginVerify  = async(props)  => {
    // e.preventDefault();
    Axios.post(serverUrl+`/login`, {
      data: props,
    }).then((response) => {
      setUserdata(response.data);
// console.log(response.data.length);
 if(response.data.length===1){
      setAuthuser(true)
  localStorage.setItem("cookies", true);
  console.log('true');
     } else{
       localStorage.clear();
      console.log('clear');
      
     }
    });
  };

 














  //////////////////////
  const getComdata = () => {
    Axios.get(serverUrl+`/comd`).then((response) => {
      setComdata(response.data[0]);
    });
 
  };


  const getProduct = async () => {
    await getProductstock();
    Axios.get(serverUrl+`/product`).then((response) => {
      setproductList(response.data);
    });
    console.log(productList);
  };

  const getSelldata = () => {
    Axios.get(serverUrl+`/selldata`).then((response) => {
      setSellData(response.data);
    });
    console.log(sellData);
  };

  const getAccounts = async() => {
    await getCustomerdue();
    Axios.get(serverUrl+`/accounts`).then((response) => {
      setAccountList(response.data);
      // console.log(response.data);
    });
    console.log(accountList);
  };

  const getTransaction = () => {
    Axios.get(serverUrl+`/transaction`).then((response) => {
      setTransaction(response.data);
    });
    console.log(transaction);
  };

  const getShead = () => {
    Axios.get(serverUrl+`/shead`).then((response) => {
      setShead(response.data);
      console.log(response.data);
    });
    console.log(shead);
  };

  const getProductstock = () => {
    Axios.get(serverUrl+`/productstock`).then((response) => {
      // setShead(response.data);
      console.log(`a`+response.data);
    });
    // console.log(shead);
  };

  const getCustomerdue = () => {
    Axios.get(serverUrl+`/customerdue`).then((response) => {
      // setShead(response.data);
      console.log(`a`+response.data);
    });
    // console.log(shead);
  };

  const getSelectedproduct = (props) => {
    Axios.put(serverUrl+`/sproduct`,{
      id: props,
    }).then((response) => {
      setSproductList(response.data);
      console.log(response.data);
    });

  };
//
  const notify = () =>
    toast.success("Task completed", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });


    const successnotify = (msg) =>
    toast.success(msg, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    const warningnotify = (msg) =>
    toast.warning(msg, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const dataInsert  = (url,accounts) => {
    // e.preventDefault();
    Axios.post(url, {
      adata: accounts,
    }).then(() => {
      notify();
      setEdit(false);
      getAccounts();
      getTransaction();
      // searchInput.current.focus();
    });
  };


  const cartDatainsert = (url,cart,actype) => {
    
    // e.preventDefault();
    Axios.post(url, {
      adata: cart,
      actype: actype,
    
    }).then(() => {
      notify();
      console.log("hey boyo")
      // setEdit(false);
      // searchInput.current.focus();
    });
  };

  const editcartdb = (url,cart) => {
    // e.preventDefault();
    Axios.put(url, {
      adata: cart,
    }).then(() => {
      notify();
      // console.log("hey boyo")
      // setEdit(false);
      // searchInput.current.focus();
    });
  };



  const selectAcccount = (props,findurl) => {
    Axios.put(findurl, {
      id: props,
    }).then((response) => {
      setEditItem(response.data[0]);
      setEdit(true);
      setOptionSelectedtransaction({ value: response.data[0].cus_id, label: response.data[0].name})
      console.log(response.data[0]);
    });
    // console.log(props);
  };

  const selectTransaction = (props,findurl) => {
    Axios.put(findurl, {
      id: props,
    }).then((response) => {
      setEditItem(response.data[0]);
      setEdit(true);
      setOptionSelectedtransaction({ value: response.data[0].cus_id, label: response.data[0].name})
      console.log(response.data[0]);
    });
    // console.log(props);
  };

  const selectSell = (props,findurl) => {
    Axios.put(findurl, {
      id: props,
    }).then((response) => {
      setCart(response.data);
      setEdit(true);
      setAccounts({ ...accounts, 
    sell_type: response.data[0].s_type,
    bill_type: response.data[0].b_type,
    account: "1",
    particular:response.data[0].comments,
    qty1: "0",
    qty2: "0",
    rate: "0",
    total: "0",
    memo: "",
  });

    setOptionSelectedaccount({ value: response.data[0].cus_id, label: response.data[0].name})
    setisCart(!isCart)
      console.log(response.data);
    });
    // console.log(editItem);
  };

  const updateData = (url,accounts) => {
    // e.preventDefault();
    Axios.put(url, {
      adata: accounts,
      // id: currentUserId,
    }).then(() => {
      // setAccounts([])
      setEditItem(null)
      setEdit(false);
      getTransaction();
      notify();
      setOptionSelectedtransaction({ value: "", label: ""})
   
      // setTimeout(inputRef.current.focus(), 3000);
      // inputRef.current.focus();
      // searchInput.current.focus();
    });
  };

  const deleteAcccount = (props,deleteurl) => {
    alert("Are you sure?")
    Axios.put(deleteurl, {
      id: props,
    }).then(() => {
      getTransaction();
      notify();
      // setAccounts(response.data[0]);
      // setEdit(true);
      // console.log(response.data[0]);
    });
    // console.log('ssssssssssss'+deleteurl);
  };

  const inputRef = useRef();
  // let name, value;
  // const getUserData = (event) => {
  //   name = event.target.name;
  //   value = event.target.value;

  //   setAccounts({ ...accounts, [name]: value });
  // };

// for import business***
// account section












//lc section
const [lcpCart, setLcpCart] = useState([]);
const [lcpurchasestore, setLcpurchasestore] = useState({
  date: "",
  lc_id: "",
  lc_name: "",
  v_no: "",
  type: "",
  ind_w: "0",
  bhu_w: "0",
  posted: "ja-471",
});

const [goodsList, setGoodslist] = useState([]);
const [ lcPurchase, setLcpurchase] = useState([]);
const getLc = async() => {
  Axios.get(serverUrl+`/lc`).then((response) => {
    setAccountList(response.data);
  });
  console.log(accountList);
};

const getGoods = async() => {
  Axios.get(serverUrl+`/goods`).then((response) => {
    setGoodslist(response.data);
  });
  console.log(goodsList);
};

const getLcpdata  = async () => {
  await Axios.get(serverUrl+`/lcpurchsasedata`).then((response) => {
    setLcpurchase(response.data);
  });
  console.log(lcPurchase);
};


const selectlcpurchase = (props,findurl) => {
  Axios.put(findurl, {
    id: props,
  }).then((response) => {
    setLcpCart(response.data);
    setEdit(true);
    setLcpurchasestore({ ...lcpurchasestore, 
 
  v_no: "",
  type: "",
  ind_w: "0",
  bhu_w: "0",
  posted: "ja-471",
});

  setOptionSelectedaccount({ value: response.data[0].lc_no, label: response.data[0].lc_name})
  setisCart(!isCart)
    console.log(response.data);
  });
  // console.log(editItem);
};

const updateLcpur = (url,accounts) => {
  // e.preventDefault();
  Axios.put(url, {
    adata: accounts,
    // id: currentUserId,
  }).then(() => {
    setEditItem(null)
    setEdit(false);
    notify();
    // setOptionSelectedaccount({ value: "", label: ""})
    
  });
};




const deleteLcpur = (props,findurl) => {
  alert("Are you sure?")
  Axios.put(findurl, {
    id: props,
  }).then((response) => {
    getLcpdata();
    notify();
    
  });
  // console.log(editItem);
};


const deleteAllinv = (props,findurl) => {
  alert("Are you sure?")
  Axios.put(findurl, {
    id: props,
  }).then((response) => {
    // getLcpdata();
    notify();
    
  });
  // console.log(editItem);
};


const deleteCartitem = (deleteurl,props,side) => {
  Axios.put(deleteurl, {
    adata: props,
    side: side,
  }).then(() => {
    getLcpdata();
    notify();
  });
};

//////////
//lc sell//

const [lcsCart, setLcsCart] = useState([]);
const [lcsellstore, setLcsellstore] = useState({
  date: "",
  client_id: "",
  client_name: "",
  client_type: "",
  lc_id: "",
  lc_name: "",
  country: "",
  v_no: "",
  type: "",
  rate: "0",
  total: "",
  ton: "0",
  ind_w: "0",
  bhu_w: "0",
  particular: "N/A",
  posted: "ja-471",
});
const [lpvehicle, setLpvehicle] = useState([]);

const getLcpvehicle = async () => {
  // await getProductstock();
  Axios.get(serverUrl+`/getlcpurv`).then((response) => {
    setLpvehicle(response.data);
  });
  console.log(lpvehicle);
};

const getSelectedlcvehicle = (props,country) => {
  console.log(country);
  Axios.put(serverUrl+`/getslpvehicle`,{
    id: props,
    country:country,
  }).then((response) => {
    setSproductList(response.data);
    console.log(response.data[0].ind_weight);
    setLcsellstore({
      ...lcsellstore,
      v_no: response.data[0].v_no,
      type: response.data[0].type,
      ind_w: response.data[0].ind_weight,
      bhu_w: response.data[0].b_weight,
      ton: country=='india'?response.data[0].b_weight:response.data[0].ind_weight,
    });
  });


};






const selectlcsell= (props,findurl) => {
  Axios.put(findurl, {
    id: props,
  }).then((response) => {
    setLcsCart(response.data);
    setEdit(true);
    setLcsellstore({ ...lcsellstore, 
 
  v_no: "",
  type: "",
  ind_w: "0",
  bhu_w: "0",
  posted: "ja-471",
});

  setOptionSelectedaccount({ value: response.data[0].lc_no, label: response.data[0].lc_name})
  setOptionlcclient({ value: response.data[0].client_id, label: response.data[0].name})
  setisCart(!isCart)
    console.log(response.data);
  });
  // console.log(editItem);
};





//////////
//side sell/pur//


const [sidecart, setSidecart] = useState([]);
const [sidestore, setSidestore] = useState({
  id:"",
  inventory:"CRASH",
  bill_type:"CASH",
  sell_type:"SELL",
  date: '',
  client_id: "1",
  client_name: "",
  side: "",
  side_name: "",
  v_no: "",
  size: "",
  ton: "0",
  cft: "0",
  rate: "0",
  total: "0",
  ld_un: "0",
  transport: "0",
  paid: "0",
  g_total: "0",
  chalan: "N/A",
  particular: "N/A",
  posted: "ja-471",
});

const [sideList, setSidelist] = useState([]);
const [ selldata, setSelldata] = useState([]);
const [ lcpurdata, setLcpurdata] = useState([]);
const getSide =  () => {
  // await getCustomerdue();
  Axios.get(serverUrl+`/sidelist`).then((response) => {
    setSidelist(response.data);
    // console.log(response.data);
  });
  console.log(sideList);
};

const sideInsert = (url,sidestore) => {
    
  // e.preventDefault();
  Axios.post(url, {
    adata: sidestore,
  }).then(() => {
    notify();
    console.log("hey boyo")
    // setEdit(false);
    // searchInput.current.focus();
  });
};

const getsellData  = async () => {
  await Axios.get(serverUrl+`/allselldata`).then((response) => {
    setSelldata(response.data);
  });
};

const getlcpurData  = async () => {
  await Axios.get(serverUrl+`/alllcpurdata`).then((response) => {
    setLcpurdata(response.data);
  });
};

const [isLoading, setIsLoading] = useState(false)
const selectlcselldata= (props,findurl) => {
  Axios.put(findurl, {
    id: props,
  }).then((response) => {
    setLcsCart(response.data);
    setEdit(true);
    setSidestore({ ...sidestore,
      id: response.data[0].id,
      inventory:response.data[0].sell_type,
      bill_type:response.data[0].bill_type,
      sell_type:response.data[0].sell_type,
      date: "",
      client_id:  response.data[0].client_id,
      client_name: response.data[0].name,
      side:response.data[0].side,
      side_name: response.data[0].side_name,
      v_no:response.data[0].v_no,
      size: response.data[0].type,
      ton: response.data[0].ton,
      cft: response.data[0].cft,
      rate: response.data[0].rate,
      total: response.data[0].total,
      ld_un: response.data[0].ld_un,
      transport: response.data[0].transport,
      paid: response.data[0].paid,
      g_total:response.data[0].g_total,
      chalan: response.data[0].chalan,
      particular: response.data[0].comments,
      posted: "ja-471",
});

  setOptionSelectedaccount({ value: response.data[0].side, label: response.data[0].side_name})
  setOptionlcclient({ value: response.data[0].client_id, label: response.data[0].name})
  setisCart(!isCart)
  setEdit(true)
  setIsLoading(true)
    // console.log(response.data);
  });
  // console.log(editItem);
};


// const editAllsell = (editurl,id,sidestore) => {
//   Axios.put(editurl, {
//     adata: sidestore,
//     id: id,
//   }).then(() => {
//     // getLcpdata();
//     // notify();
//   });
// };













//ledger

const getLedg  = async () => {
  fetch(`http://localhost:3009/pdf`, {
    method: "GET",
    headers: {
      "Content-Type": "application/pdf"
    }
  })
    .then(res => res.blob())
    .then(response => {
      //Create a Blob from the PDF Stream
      console.log(response);
      const file = new Blob([response], {
        type: "application/pdf"
      });
      //Build a URL from the file
      const fileURL = URL.createObjectURL(file);
      //Open the URL on new Window
      window.open(fileURL);
    })
    .catch(error => {
      console.log(error);
    });
};



////ledgerreport
/////////////


var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = yyyy+'-'+mm+'-'+dd;

console.log(today)
var b_today = new Date();
var dd = b_today.getDate();

var mm = b_today.getMonth()+1-1; 
var yyyy = b_today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
b_today = yyyy+'-'+mm+'-'+dd;
console.log(b_today)


const [ledDetails, setLeddetails] = useState([]);
const [prevDue, setPrevDue] = useState("0.00");
const [ledData, setLeddata] = useState({
  client_id: "",
  client_name: "",
  client_address: "",
  contract: "",
  from_date: b_today,
  to_date: today,
 
});

const [sellpurDatafil, setSellpurDatafil] = useState({
  date: today,
  bill_type: "CASH",
  sell_type: "SELL",
  inventory: "CRASH",

 
});
const [lcsellpurfill, setLcsellpurfill] = useState({
  date: today,
  bill_type: "LC_SELL",
});



const getAccountled= (props,findurl) => {
  Axios.put(findurl, {
    adata: props,
  }).then((response) => {
setLeddetails(response.data)
// console.log(response.data);
  });
  // console.log(editItem);
};

const getPrevDue = (ledData,pdueurl) => {
  // e.preventDefault();
  Axios.put(pdueurl, {
    adata: ledData,
    // id: currentUserId,
  }).then((response) => {
    setPrevDue(response.data[0].due);
    // console.log(response.data[0].due);
    // setEditItem(null)
    // setEdit(false);
    // notify();
    // setOptionSelectedaccount({ value: "", label: ""})
    
  });
};



////////////final account///////
///////////////////////////
const [openingBal, setOpening] = useState('0.00');
const [cashSell, setCashsell] = useState([]);
const [creditSell, setCreditSell] = useState([]);
const [cashPur, setCashpur] = useState([]);
const [creditPur, setCreditpur] = useState([]);
const [cashRec, setCashrcv] = useState([]);
const [cashPaid, setCashpaid] = useState([]);
const [dualTran, setDualtran] = useState([]);


const [lcSell, setLcsell] = useState([]);
const [allSellb2, setAllsellb2] = useState([]);

const [allTranb2, setAlltranb2] = useState([]);




const getOpening= (props,findurl) => {
  Axios.put(findurl, {
    adata: props,
  }).then((response) => {
    setOpening(response.data)
// console.log(response.data);
  });
  // console.log(editItem);
};

// const getCashsell= (props,findurl) => {
//   Axios.put(findurl, {
//     adata: props,
//   }).then((response) => {
//     setCashsell(response.data)
// // console.log(response.data);
//   });
//   // console.log(editItem);
// };




// const getCreditsell= (props,findurl) => {
//   Axios.put(findurl, {
//     adata: props,
//   }).then((response) => {
//     setCreditSell(response.data)
// // console.log(response.data);
//   });
//   // console.log(editItem);
// };

// const getCashpur= (props,findurl) => {
//   Axios.put(findurl, {
//     adata: props,
//   }).then((response) => {
//     setCashpur(response.data)
// // console.log(response.data);
//   });
//   // console.log(editItem);
// };




// const getCreditpur= (props,findurl) => {
//   Axios.put(findurl, {
//     adata: props,
//   }).then((response) => {
//     setCreditpur(response.data)
// // console.log(response.data);
//   });
//   // console.log(editItem);
// };





/////busi2///
//////////////

const getlcSell= (props,findurl) => {
  Axios.put(findurl, {
    adata: props,
  }).then((response) => {
    setLcsell(response.data)
console.log(response.data);
  });
  // console.log(editItem);
};

const getAllsellb2= (props,findurl) => {
  Axios.put(findurl, {
    adata: props,
  }).then((response) => {
    setAllsellb2(response.data)
// console.log(response.data);
  });
  // console.log(editItem);
};
const getAlltranb2= (props,findurl) => {
  Axios.put(findurl, {
    adata: props,
  }).then((response) => {
    setAlltranb2(response.data)
// console.log(response.data);
  });
  // console.log(editItem);
};





useEffect(() => {
  window.addEventListener("beforeunload", alertUser);
  return () => {
    window.removeEventListener("beforeunload", alertUser);
  };
}, []);
const alertUser = (e) => {
  e.preventDefault();
  e.returnValue = "";
};



  // useEffect(() => {
  //   getLcpdata();
  //   getComdata();
  // }, []);

  return (
    <Context.Provider
      value={{
        withdraw, setWithdraw,
        getWithdrawrecord,
        getPackage,
        packages,
        updatePackage,
        getRecharge,
        recharge,
        LoginVerify,
        userdata, setUserdata,
        authUser, setAuthuser,
        getUserbalance,userBal,withDrawreq,


        optionSelectedexp, setOptionSelectedexp,
        optionSelectedimp, setOptionSelectedimp,
        getlcpurData,lcpurdata,
        lcsellpurfill, setLcsellpurfill,
        sellpurDatafil, setSellpurDatafil,
        selectTransaction,
        getTransaction,
        openingBal,
        allTranb2,
        allSellb2,
        lcSell,
        getOpening,
        getlcSell,
        getAllsellb2,
        getAlltranb2,
        deleteAllinv,
        setIsLoading,
        isLoading,
        selectlcselldata,
        setSelldata,
        selldata,
        getsellData,
        sideInsert,
        sideList,
        getSide,
        prevDue,
        getPrevDue,
        ledDetails,
        getAccountled,
        setLeddata,
        ledData,
        getLedg,
        sidestore,
        setSidestore,
        selectlcsell,
        lcsCart, setLcsCart,
        setLcpCart,
        lcpCart,
        getSelectedlcvehicle,
        getLcpvehicle,
        lpvehicle, setLpvehicle,
        setLcsellstore,
        lcsellstore,
        optionlcclient,
        setOptionlcclient,
        getComdata,
        comData,
        getLcpdata,
        deleteLcpur,
        deleteCartitem,
        updateLcpur,
        selectlcpurchase,
        lcpurchasestore,
        setLcpurchasestore,
        lcPurchase,
        getGoods,
        goodsList,
        getLc,
        serverUrl,
        getProductstock,
        editcartdb,
        setOptionSelectedtransaction,optionSelectedtransaction,
        setTransaction,transaction,
        setisCart,isCart,
        optionSelectedaccount, setOptionSelectedaccount,
        accounts, 
        setAccounts,
        setCart,
        cart,
        setSproductList,
        sproductList,
        selectSell,
        sellData,
        getSelectedproduct,
        sproductList,
        getProduct,
        productList,
        warningnotify,
        successnotify,
        tinu,
        accountList,
        cartDatainsert,
        editItem,
        setEditItem,
        dataInsert,
        ToastContainer,
        notify,
        getShead,
        shead,
        getAccounts,
        selectAcccount,
        edit,
        setEdit,
        updateData,
        deleteAcccount,
        // getUserData,
        inputRef,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Store;
