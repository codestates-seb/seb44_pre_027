import React, { useState, useEffect } from 'react';
import { call } from '@/utils/ApiService';

export const useMemberId = () => {
    const [isMember, setIsMember] = useState(4);

    useEffect(() => {
        const fetchMember = async () => {
            return call(`/users`, 'GET', null)
            .then((res) => {
                setIsMember(res[0].memberId);
            });
        };

        fetchMember();
    }, []);
    console.log('맴버 아이디'+isMember);
    return isMember;

};

