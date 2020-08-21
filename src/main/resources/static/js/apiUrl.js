//统一api接口
const host = window.location.host;
const API_BASE_URL = "http://" + host;
const apiUrl = {
    API_BASE : API_BASE_URL+'/',
    //系统设置接口
    base: {
        selectDictByType: API_BASE_URL + '/api/auth/sys/dict/selectDictByType',//根据类型，获取字典数据
        uploadImg: API_BASE_URL + '/sys/uploadImg',//图片上传
    },
    account: {
        auth: API_BASE_URL + '/auth',//获取token
        isLogin: API_BASE_URL + '/api/auth/isLogin',//检验是否登陆
        isPermission: API_BASE_URL + '/api/auth/isPermission',
        logout: API_BASE_URL + '/api/auth/account/_logout',//退出
        getLoginInfo: API_BASE_URL + '/api/auth/account/getLoginInfo',//获取登录人信息

    },
    user: {
        addPage: API_BASE_URL + '/html/user/addPage', //跳转新增页面
        updatePage: API_BASE_URL + '/html/user/updatePage', //跳转修改页面
        pageList: API_BASE_URL + '/api/auth/user/pageList',//分页显示和查询
        AllList: API_BASE_URL + '/api/auth/user/AllList',//显示和查询
        delete: API_BASE_URL + '/api/auth/user/delete',//删除和批量删除
        save: API_BASE_URL + '/api/auth/user/save',//新增和修改
        saveNewPassword: API_BASE_URL + '/api/auth/user/saveNewPassword',//修改密码页面

    },
    role: {
        addPage: API_BASE_URL + '/html/role/addPage',//新增页面
        updatePage: API_BASE_URL + '/html/role/updatePage',//修改页面
        listRole: API_BASE_URL + '/api/auth/role/listRole',      //下拉列表获取当前公司启用状态的角色
        pageList: API_BASE_URL + '/api/auth/role/pageList',//分页显示和查询
        AllList: API_BASE_URL + '/api/auth/role/AllList',//显示和查询
        save: API_BASE_URL + '/api/auth/role/save',//新增和修改
        delete: API_BASE_URL + '/api/auth/role/delete',//删除和批量删除
    },
    menu: {
        addPage: API_BASE_URL + '/html/menu/addPage',//新增页面
        updatePage: API_BASE_URL + '/html/menu/updatePage',//修改页面

        listTreeTable: API_BASE_URL + '/api/auth/menu/listTreeTable',//显示tree数据表格
        save: API_BASE_URL + '/api/auth/menu/save',//新增和修改
        delete: API_BASE_URL + '/api/auth/menu/delete',//删除和批量删除
        getDTreeList: API_BASE_URL + '/api/auth/menu/getDTreeList',//获取dtree需要的data数据
        listFromPid: API_BASE_URL + '/api/auth/menu/listFromPid',//根据pid对象查询，返回一个对象
        iconList: API_BASE_URL + '/html/menu/icon',//跳转图标页面
        listLoginInfoMenu: API_BASE_URL + '/api/auth/menu/listLoginInfoMenu',//显示登录人拥有的权限菜单

    },
    company: {
        datalist: API_BASE_URL + '/api/auth/sys/company/list', //查询所有部门
        addPage: API_BASE_URL + '/html/company/AddPage', //跳转新增页面
        updatePage: API_BASE_URL + '/html/company/UpdatePage', //跳转修改页面
        addcompany: API_BASE_URL + '/api/auth/sys/company/addcompany', //新增部门
        updatecompany: API_BASE_URL + '/api/auth/sys/company/Updatecompany', //修改部门
        delete: API_BASE_URL + '/api/auth/sys/company/delete',//删除和批量删除
        tree: API_BASE_URL + '/sys/company/tree', //修改部门
        getDTreeList: API_BASE_URL + '/sys/auth/sys/company/getDTreeList', //树状图

    },
    log: {
        datalist: API_BASE_URL + '/api/auth/sys/log/list', //查询日志
        delete: API_BASE_URL + '/api/auth/sys/log/delete', //删除日志
    },
    dict: {
        datalist: API_BASE_URL + '/api/auth/sys/dict/datalist', //查询所有数据字典
        addIndexPage: API_BASE_URL + '/html/dict/addIndex', //跳转新增索引页面
        addDictPage: API_BASE_URL + '/html/dict/addDict', //跳转新增字典页面
        addIndex: API_BASE_URL + '/api/auth/sys/dict/index/add', //新增索引
        addDict: API_BASE_URL + '/api/auth/sys/dict/add', //新增字典
        select: API_BASE_URL + '/api/auth/sys/dict/index/select',  //查询字典索引
        delete: API_BASE_URL + '/api/auth/sys/dict/delete', //删除字典
        updatePage: API_BASE_URL + '/html/dict/UpdatePage', //跳转修改页面
        updateDict: API_BASE_URL + '/api/auth/sys/dict/UpdateDict', //修改字典
    },
    photo: {
        UploadImage: API_BASE_URL + '/PhotoUpload/UploadImage',
    },
    excel: {
        excelExport: API_BASE_URL + '/front/file/excelExport',
        excelImport: API_BASE_URL + '/front/file/excelImport',//数据导入
        excelImportData: API_BASE_URL + '/front/file/excelImportData',//数据显示
        excelImportBill: API_BASE_URL + '/front/file/excelImportBill',//单据类型excel导入
        excelImportBom: API_BASE_URL + '/front/file/excelImportBom',
    },

    //广告管理接口
    carousel: {
        datalist: API_BASE_URL + '/api/auth/eweight/carousel/datalist', //查询广告列表
        addPage: API_BASE_URL + '/html/carousel/AddPage', //跳转新增页面
        addCarousel: API_BASE_URL + '/api/auth/eweight/carousel/add', //新增索引
        delete: API_BASE_URL + '/api/auth/eweight/carousel/delete', //删除广告
        updatePage: API_BASE_URL + '/html/carousel/UpdatePage', //跳转修改详情页面
        updateCarousel: API_BASE_URL + '/api/auth/eweight/carousel/update',//修改广告信息
    },
    app: {
        userList: API_BASE_URL + '/api/auth/app/user/list',  //app用户列表
    },
    instructionTag: {
        datalist: API_BASE_URL + '/api/auth/eweight/instruction/tag/datalist', //查询说明书列表
        addPage: API_BASE_URL + '/html/tag/add', //跳转新增页面
        addTag: API_BASE_URL + '/api/auth/eweight/instruction/tag/add', //新增标签
        delete: API_BASE_URL + '/api/auth/eweight/instruction/tag/delete', //删除标签
        updatePage: API_BASE_URL + '/html/tag/update', //跳转修改详情页面
        updateCarousel: API_BASE_URL + '/api/auth/eweight/instruction/tag/update',//修改标签信息
    }
};
