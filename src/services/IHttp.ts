export interface IHttp {
    get(url: string, data?: object): Promise<any>;

    post(url: string, data?: object): Promise<any>;

    put(url: string, data?: object): Promise<any>;

    patch(url: string, data?: object): Promise<any>;

    delete(url: string, data?: object): Promise<any>;
}
