import type { InitOptions, SendOptions } from './type';

class Beacon {
  private dsn: string;

  private publicKey: string;

  private appId: string;

  private enable: boolean;

  private debug: boolean;

  constructor() {
    this.dsn = 'https://api.beacon.fr';
    this.publicKey = '';
    this.appId = '';

    this.debug = false;
    this.enable = true;
  }

  public init({ publicKey, appId, dsn, enable, debug }: InitOptions): void {
    this.publicKey = publicKey;
    this.appId = appId;

    if (dsn) {
      this.dsn = dsn;
    }

    if (enable) {
      this.enable = enable;
    }

    if (debug) {
      this.debug = debug;
    }
  }

  public async send({ formId, data }: SendOptions): Promise<void> {
    console.info({
      enable: this.enable,
      debug: this.debug,
      dsn: this.dsn,
      publicKey: this.publicKey,
      appId: this.appId,
      formId,
      data,
    });

    return Promise.resolve();
  }
}

export default Beacon;
