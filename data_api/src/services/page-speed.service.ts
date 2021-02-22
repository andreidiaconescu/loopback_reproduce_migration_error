import {BindingScope, inject, injectable} from '@loopback/core';

@injectable({scope: BindingScope.TRANSIENT})
export class PageSpeedService {
  constructor() // @inject('datasources.pagespeed')
  // protected dataSource: PagespeedDataSource = new PagespeedDataSource(),
  {}

  /*
   * Add service methods here
   */
  // public async runAccessibilityAuditOnlyForUrl(urlToAudit: string): Promise<number> {
  // return this.dataSource.runAccessibilityAuditOnlyForUrl(urlToAudit);
  // }
}
