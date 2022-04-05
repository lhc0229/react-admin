const Config = {
  domain: process.env.REACT_APP_DOMAIN,
  ssoDomain: `http://${process.env.REACT_APP_SSO}`, // sso域名
  sso: `http://${process.env.REACT_APP_SSO}/#/prelogin?redirectURL=`, // sso登录
  ssoLogout: `http://${process.env.REACT_APP_SSO}/#/logout` // sso退出
}

export default Config
