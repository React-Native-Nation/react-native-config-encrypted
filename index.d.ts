import Config from 'react-native-config';

declare module 'react-native-config-encrypted' {
    export interface ConfigureOptions {
        key: string;
        provider: any;
    }

    export default class SecureConfig {
        static configure(config: ConfigureOptions): void;
        static encrypt(msg: string): string;
        static decrypt(value: string): string;
        static get(key: keyof typeof Config, decrypt?: boolean): string;
    }
}
