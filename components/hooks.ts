import { useEffect, useState } from 'react'

import { getSubdomain } from '@/lib/data/domain'

export const useIsSubdomainHost = (subdomain: string): boolean => {
  const [isSubdomainHost, setIsSubdomainHost] = useState<boolean>(false)

  useEffect(
    () => setIsSubdomainHost(getSubdomain(window.location.host) === subdomain),
    [subdomain],
  )

  return isSubdomainHost
}
