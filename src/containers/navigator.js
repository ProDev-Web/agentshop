import React from "react";
import {
    createStackNavigator,
    createSwitchNavigator
} from "react-navigation";
import StackViewStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';

import Ad from "../pages/ad";

import Index from "../pages/index";
import PhotoGallery from "../utils/photoGallery";
import FullScreenVideo from "../utils/fullScreenVideo";
import PageDetail from "../pages/page/detail";

import GoodsList from "../pages/goods/list";
import GoodsDetail from "../pages/goods/detail";

import Pay from "../pages/pay";
import PaySuccess from "../pages/pay/success";

import UserLogin from "../pages/user/login";
import UserInfo from "../pages/user/info";
import UserRegister from "../pages/user/register";
import UserFindPassword from "../pages/user/findPassword";
import UserAddressAdd from "../pages/user/address/add";
import UserAddressEdit from "../pages/user/address/edit";
import UserAddressList from "../pages/user/address/list";

import CartOrderFill from "../pages/cart/orderFill";

import OrderList from "../pages/order/list";
import OrderDetail from "../pages/order/detail";

import RefundDetail from "../pages/refund/detail";
import RefundList from "../pages/refund/list";
import RefundLogisticsFill from "../pages/refund/logisticsFill";
import RefundServiceApply from "../pages/refund/serviceApply";
import RefundServiceType from "../pages/refund/serviceType";

import AddressAdd from "../pages/address/add";
import AddressEdit from "../pages/address/edit";
import AddressList from "../pages/address/list";

import EvaluateAdd from "../pages/evaluate/add"
import EvaluateAdditional from "../pages/evaluate/additional"
import EvaluateDetail from "../pages/evaluate/detail"
import EvaluateList from "../pages/evaluate/list"

import CollectGoods from "../pages/collect/goods"

const modalStyleStackNames = [
    'UserLogin',
    'FullScreenVideo',
]

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}

const indexNavigationOptions = ({ navigation, screenProps }) => ({
    'Home': {
        title: screenProps.homeTitle
    },
    'Category': {
        title: '分类'
    },
    'Cart': {
        title: '购物车',
    },
    'User': {
        title: '我的',
    },
})

const AppStack = createStackNavigator(
    {
        Index: {
            screen: Index,
            navigationOptions:({ navigation, screenProps }) => {
                return indexNavigationOptions({navigation, screenProps})[getCurrentRouteName(navigation.state)]
            }
        },
        PageDetail: {
            screen: PageDetail,
        },
        // 点击查看大图
        PhotoGallery: {
            screen: PhotoGallery,
            navigationOptions: {
                header: null,
            }
        },
        FullScreenVideo: {
            screen: FullScreenVideo
        },
        // category
        GoodsList: {
            screen: GoodsList,
            navigationOptions: {
                title: '商品搜索'
            }
        },
        GoodsDetail: {
            screen: GoodsDetail,
            navigationOptions: {
                title: '商品详情'
            }
        },
        Pay: {
            screen: Pay,
            navigationOptions: {
                title: '收银台'
            }
        },
        PaySuccess: {
            screen: PaySuccess,
            navigationOptions: {
                title: '支付成功',
                headerLeft: null,
                headerStyle: {
                    backgroundColor: "#fff",
                    elevation: 0,//去掉安卓阴影
                    borderBottomWidth: 0,
                },
            }
        },
        // user
        UserLogin: {
            screen: UserLogin,
            navigationOptions: {
                title: '登录'
            }
        },
        UserInfo: {
            screen: UserInfo,
            navigationOptions: {
                title: '个人中心'
            }
        },
        UserRegister: {
            screen: UserRegister,
            navigationOptions: {
                title: '注册'
            }
        },
        UserFindPassword: {
            screen: UserFindPassword,
            navigationOptions: {
                title: '找回密码'
            }
        },
        UserAddressAdd: {
            screen: UserAddressAdd,
            navigationOptions: {
                title: '收货地址添加'
            }
        },
        UserAddressEdit: {
            screen: UserAddressEdit,
            navigationOptions: {
                title: '收货地址修改'
            }
        },
        UserAddressList: {
            screen: UserAddressList,
            navigationOptions: {
                title: '收货地址列表'
            }
        },
        // cart
        CartOrderFill: {
            screen: CartOrderFill,
            navigationOptions: {
                title: '提交订单'
            }
        },
        // order
        OrderList: {
            screen: OrderList,
            navigationOptions: {
                title: '订单列表'
            }
        },
        OrderDetail: {
            screen: OrderDetail,
            navigationOptions: {
                title: '订单详情'
            }
        },
        // refund
        RefundDetail: {
            screen: RefundDetail,
            navigationOptions: {
                title: '退款详情'
            }
        },
        RefundList: {
            screen: RefundList,
            navigationOptions: {
                title: '退款列表'
            }
        },
        RefundLogisticsFill: {
            screen: RefundLogisticsFill,
            navigationOptions: {
                title: '填写退款物流信息'
            }
        },
        RefundServiceApply: {
            screen: RefundServiceApply,
            navigationOptions: {
                title: '退款申请'
            }
        },
        RefundServiceType: {
            screen: RefundServiceType,
            navigationOptions: {
                title: '选择售后服务类型'
            }
        },
        // address
        AddressAdd: {
            screen: AddressAdd,
            navigationOptions: {
                title: '收货地址添加'
            }
        },
        AddressEdit: {
            screen: AddressEdit,
            navigationOptions: {
                title: '收货地址修改'
            }
        },
        AddressList: {
            screen: AddressList,
            navigationOptions: {
                title: '收货地址列表'
            }
        },
        // evaluate
        EvaluateAdd: {
            screen: EvaluateAdd,
            navigationOptions: {
                title: '评价'
            }
        },
        EvaluateAdditional: {
            screen: EvaluateAdditional,
            navigationOptions: {
                title: '追加评价'
            }
        },
        EvaluateDetail: {
            screen: EvaluateDetail,
            navigationOptions: {
                title: '评价详情'
            }
        },
        EvaluateList: {
            screen: EvaluateList,
            navigationOptions: {
                title: '评价列表'
            }
        },
        CollectGoods:{
            screen: CollectGoods,
            navigationOptions: {
                title: '商品收藏'
            }
        }
    },
    {
        navigationOptions: ({ navigation }) => ({
            headerBackTitle: null,
            gesturesEnabled: true,
            headerStyle: {
                backgroundColor: "#fff",
                elevation: 0,//去掉安卓阴影
                borderBottomWidth: 0.5,
                borderBottomColor: '#dcdcdc',
            },
            headerTintColor: '#000',
        }),
        headerTransitionPreset: 'uikit',
        mode: "card",
        transitionConfig: (e) => ({
            screenInterpolator: (sceneProps) => {
                const { scene } = sceneProps;
                const { route } = scene;
                if (modalStyleStackNames.includes(route.routeName)) {
                    return StackViewStyleInterpolator.forVertical(sceneProps);
                }
                return StackViewStyleInterpolator.forHorizontal(sceneProps);
            }
        })
    }
)

const AdStack = createStackNavigator({ 
    Ad: {
        screen: Ad,
        navigationOptions: {
            header: null
        }
    }
})

export default createSwitchNavigator(
    {
        Ad: AdStack,
        App: AppStack,
    }, {
        initialRouteName: 'Ad',
    }
)