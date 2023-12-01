"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[28],{7696:(e,t,s)=>{s.r(t),s.d(t,{default:()=>k});var r=s(5861),a=s(7294),o=s(5697),n=s.n(o),i=s(49),u=s(6896),c=s(7747),d=s(2338),l=s(9391),m=s(6933),p=s(9065),g=s(7536),_=s(6550),f=s(4004),h=s(5118),y=s(3162),E=s(5274),v=s(5748);const A=(0,i.Em)({defaultMessage:[{type:0,value:"Incorrect username or password, please try again."}],id:"login_page.error.incorrect_username_or_password"}),b=()=>{const{formatMessage:e}=(0,u.Z)(),t=(0,m.Z)(),s=(0,g.cI)(),o=(0,_.TH)(),n=(0,f.Z)(),{isRegistered:i,customerType:b}=(0,l.useCustomerType)(),k=(0,l.useAuthHelper)(l.AuthHelpers.LoginRegisteredUserB2C),w=(0,l.useCustomerId)(),B=(0,E.D)(b),{data:C}=(0,l.useCustomerBaskets)({parameters:{customerId:w}},{enabled:!!w&&!v.sk,keepPreviousData:!0}),D=(0,l.useShopperBasketsMutation)("mergeBasket"),T=function(){var t=(0,r.Z)((function*(t){try{var r,a,o;yield k.mutateAsync({username:t.email,password:t.password});(null==C||null===(r=C.baskets)||void 0===r||null===(a=r[0])||void 0===a||null===(o=a.productItems)||void 0===o?void 0:o.length)>0&&"guest"===B&&D.mutate({headers:{"Content-Type":"application/json"},parameters:{createDestinationBasket:!0}})}catch(t){const r=/Unauthorized/i.test(t.message)?e(A):e(y.oj);s.setError("global",{type:"manual",message:r})}}));return function(e){return t.apply(this,arguments)}}();return(0,a.useEffect)((()=>{var e;i&&(null!=o&&null!==(e=o.state)&&void 0!==e&&e.directedFrom?t(o.state.directedFrom):t("/account"))}),[i]),(0,a.useEffect)((()=>{n.sendViewPage(o.pathname)}),[]),a.createElement(c.xu,{"data-testid":"login-page",bg:"gray.50",py:[8,16]},a.createElement(p.Z,{title:"Sign in",description:"Customer sign in"}),a.createElement(d.W,{paddingTop:16,width:["100%","407px"],bg:"white",paddingBottom:14,marginTop:8,marginBottom:8,borderRadius:"base"},a.createElement(h.Z,{form:s,submitForm:T,clickCreateAccount:()=>t("/registration"),clickForgotPassword:()=>t("/reset-password")})))};b.getTemplateName=()=>"login",b.propTypes={match:n().object};const k=b}}]);