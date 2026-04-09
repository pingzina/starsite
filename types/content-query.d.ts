type QueryCollectionResult = {
  where(field: string, operator: string, value: unknown): ReturnType<typeof queryCollection>
  order(field: string, direction: 'ASC' | 'DESC'): ReturnType<typeof queryCollection>
  all(): Promise<Record<string, any>[]>
  path(value: string): {
    first(): Promise<Record<string, any> | null>
  }
}

declare function queryCollection(event: any, collection: string): QueryCollectionResult
declare function queryCollection(collection: string): QueryCollectionResult
