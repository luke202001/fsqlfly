import request from 'umi-request';

export function getAllService(namespace: string) {
  return (params: any) => {
    const t = new Date().getTime();
    return request(`/api/${namespace}?_time=${t}`, { params });
  };
}

export function updateService(namespace: string) {
  return (params: { id: number }) => {
    return request(`/api/${namespace}/${params.id}`, {
      method: 'POST',
      data: params,
    });
  };
}

export function createService(namespace: string) {
  return (params: { id: number }) => {
    return request(`/api/${namespace}`, {
      method: 'POST',
      data: params,
    });
  };
}

export function deleteService(namespace: string) {
  return (params: { id: number }) => {
    return request(`/api/${namespace}/${params.id}`, {
      method: 'DELETE',
      data: params,
    });
  };
}

export function runService(params: { id: number; method: string; model: string }) {
  return request(`/api/${params.model}/${params.method}/${params.id}`, {
    method: 'POST',
    data: params,
  });
}
